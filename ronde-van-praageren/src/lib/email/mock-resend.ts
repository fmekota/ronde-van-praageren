// Mock email service for local development
// Logs emails to console instead of sending

import { Registration } from "@/lib/schemas/registration";
import { EVENT_CONFIG } from "@/config/event";

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

export async function sendVerificationEmail(
  registration: Registration,
  verificationToken: string
): Promise<{ success: boolean; error?: string }> {
  const verificationLink = `${getBaseUrl()}/api/verify?token=${verificationToken}`;

  console.log("\n" + "=".repeat(60));
  console.log("[Mock Email] VERIFICATION EMAIL");
  console.log("=".repeat(60));
  console.log(`To: ${registration.email}`);
  console.log(`Subject: Verify your ${EVENT_CONFIG.name} ${EVENT_CONFIG.year} registration`);
  console.log("-".repeat(60));
  console.log(`Hi ${registration.firstName},`);
  console.log(`Thank you for registering for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}!`);
  console.log(`\nClick this link to verify your email:`);
  console.log(`\n  ${verificationLink}`);
  console.log(`\nThis link expires in 24 hours.`);
  console.log("=".repeat(60) + "\n");

  return { success: true };
}

export async function sendConfirmationEmail(
  registration: Registration
): Promise<{ success: boolean; error?: string }> {
  if (!registration.startNumber) {
    return { success: false, error: "No start number assigned" };
  }

  console.log("\n" + "=".repeat(60));
  console.log("[Mock Email] CONFIRMATION EMAIL");
  console.log("=".repeat(60));
  console.log(`To: ${registration.email}`);
  console.log(
    `Subject: ${EVENT_CONFIG.name} ${EVENT_CONFIG.year} - Registration Confirmed! Start #${registration.startNumber}`
  );
  console.log("-".repeat(60));
  console.log(`Congratulations, ${registration.firstName}!`);
  console.log(`\nYour registration is complete.`);
  console.log(`\n  START NUMBER: #${registration.startNumber}`);
  console.log(`\nSee you at the start line!`);
  console.log("=".repeat(60) + "\n");

  return { success: true };
}
