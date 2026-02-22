import { z } from "zod";

// Phone number regex - accepts common international formats
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

// Strava profile URL regex
const stravaProfileRegex =
  /^https?:\/\/(www\.)?strava\.com\/(athletes|pros)\/[a-zA-Z0-9_-]+\/?$/;

export const registrationSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less")
    .trim(),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or less")
    .trim(),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be 100 characters or less")
    .toLowerCase()
    .trim(),

  club: z
    .string()
    .max(100, "Club name must be 100 characters or less")
    .trim()
    .optional()
    .transform((val) => val || undefined),

  stravaProfile: z
    .string()
    .trim()
    .optional()
    .transform((val) => val || undefined)
    .refine(
      (val) => !val || stravaProfileRegex.test(val),
      "Please enter a valid Strava profile URL (e.g., https://www.strava.com/athletes/12345)"
    ),

  emergencyName: z
    .string()
    .min(1, "Emergency contact name is required")
    .max(100, "Emergency contact name must be 100 characters or less")
    .trim(),

  emergencyPhone: z
    .string()
    .min(1, "Emergency contact phone is required")
    .max(20, "Phone number must be 20 characters or less")
    .trim()
    .refine(
      (val) => phoneRegex.test(val),
      "Please enter a valid phone number"
    ),

  acceptsTerms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),

  // Honeypot field - should always be empty
  website: z
    .string()
    .max(0, "This field should be empty")
    .optional()
    .transform(() => undefined),
});

export type RegistrationInput = z.input<typeof registrationSchema>;
export type RegistrationData = z.output<typeof registrationSchema>;

// Database registration type (includes system fields)
export interface Registration extends Omit<RegistrationData, "acceptsTerms" | "website"> {
  id: string;
  acceptsTerms: boolean;
  createdAt: string;
  emailVerified: boolean;
  startNumber?: number;
  verifiedAt?: string;
}

// Form state for server action
export interface RegistrationFormState {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof RegistrationInput]?: string[];
  };
}
