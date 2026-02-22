"use server";

import { nanoid } from "nanoid";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import {
  registrationSchema,
  RegistrationFormState,
  Registration,
} from "@/lib/schemas/registration";
import {
  createRegistration,
  isEmailRegistered,
  getRegistrationCount,
} from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { REGISTRATION_CONFIG } from "@/config/registration";

// Check if we should use mock mode
const useMockMode =
  process.env.USE_MOCK_DB === "true" ||
  (!process.env.KV_REST_API_URL && !process.env.KV_REST_API_TOKEN);

// Lazy initialize rate limiter
let ratelimitInstance: Ratelimit | null = null;

// Simple in-memory rate limiter for mock mode
const mockRateLimits = new Map<string, { count: number; resetAt: number }>();

async function checkRateLimit(ip: string): Promise<{ success: boolean }> {
  // Skip rate limiting in mock mode (use simple in-memory tracker)
  if (useMockMode) {
    const now = Date.now();
    const windowMs = REGISTRATION_CONFIG.rateLimits.windowMs;
    const maxRequests = REGISTRATION_CONFIG.rateLimits.registrationsPerIp;

    const existing = mockRateLimits.get(ip);
    if (!existing || now > existing.resetAt) {
      mockRateLimits.set(ip, { count: 1, resetAt: now + windowMs });
      return { success: true };
    }

    if (existing.count >= maxRequests) {
      return { success: false };
    }

    existing.count++;
    return { success: true };
  }

  // Use real rate limiter with Redis
  if (!ratelimitInstance) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
      // Fallback: allow request if Redis not configured
      console.warn("[Rate Limit] Redis not configured, skipping rate limit");
      return { success: true };
    }

    const redis = new Redis({ url, token });
    ratelimitInstance = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(
        REGISTRATION_CONFIG.rateLimits.registrationsPerIp,
        "1 h"
      ),
      analytics: true,
      prefix: "ratelimit:registration",
    });
  }

  return ratelimitInstance.limit(ip);
}

export async function submitRegistration(
  _prevState: RegistrationFormState,
  formData: FormData
): Promise<RegistrationFormState> {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0] ?? "127.0.0.1";

    // Check rate limit
    const { success: rateLimitOk } = await checkRateLimit(ip);
    if (!rateLimitOk) {
      return {
        success: false,
        message:
          "Too many registration attempts. Please try again in an hour.",
      };
    }

    // Check if registration is open
    const now = new Date();
    const opensAt = new Date(REGISTRATION_CONFIG.registrationOpens);
    const closesAt = new Date(REGISTRATION_CONFIG.registrationCloses);

    if (now < opensAt) {
      return {
        success: false,
        message: `Registration opens on ${opensAt.toLocaleDateString()}.`,
      };
    }

    if (now > closesAt) {
      return {
        success: false,
        message: "Registration is now closed.",
      };
    }

    // Check capacity
    const currentCount = await getRegistrationCount();
    if (currentCount >= REGISTRATION_CONFIG.maxParticipants) {
      return {
        success: false,
        message:
          "Sorry, registration is full. Consider joining the waitlist.",
      };
    }

    // Extract form data
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      club: formData.get("club") || undefined,
      stravaProfile: formData.get("stravaProfile") || undefined,
      emergencyName: formData.get("emergencyName"),
      emergencyPhone: formData.get("emergencyPhone"),
      acceptsTerms: formData.get("acceptsTerms") === "true",
      website: formData.get("website") || undefined, // Honeypot
    };

    // Validate with Zod
    const result = registrationSchema.safeParse(rawData);

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(issue.message);
      }

      return {
        success: false,
        message: "Please fix the errors below.",
        errors: fieldErrors,
      };
    }

    // Check honeypot (bot detection)
    if (rawData.website) {
      // Silently succeed but don't actually register
      return {
        success: true,
        message:
          "Registration submitted! Please check your email to verify your address.",
      };
    }

    // Check for duplicate email
    const emailExists = await isEmailRegistered(result.data.email);
    if (emailExists) {
      return {
        success: false,
        message:
          "This email is already registered. Check your inbox for the verification email.",
        errors: {
          email: ["This email is already registered"],
        },
      };
    }

    // Create registration object
    const registration: Registration = {
      id: nanoid(),
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      email: result.data.email,
      club: result.data.club,
      stravaProfile: result.data.stravaProfile,
      emergencyName: result.data.emergencyName,
      emergencyPhone: result.data.emergencyPhone,
      acceptsTerms: true,
      createdAt: new Date().toISOString(),
      emailVerified: false,
    };

    // Generate verification token
    const verificationToken = nanoid(32);

    // Store registration
    await createRegistration(registration, verificationToken);

    // Send verification email
    const emailResult = await sendVerificationEmail(registration, verificationToken);

    if (!emailResult.success) {
      console.error("Failed to send verification email:", emailResult.error);
      // Still return success - the registration is saved
      // User can request a new verification email later
    }

    return {
      success: true,
      message:
        "Registration submitted! Please check your email to verify your address.",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
