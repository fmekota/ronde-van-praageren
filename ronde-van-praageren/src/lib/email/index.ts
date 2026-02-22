// Email module that switches between real and mock implementations
// Set USE_MOCK_EMAIL=true in .env.local for local development without Resend

import type { Registration } from "@/lib/schemas/registration";

// Check if we should use mock
const useMock =
  process.env.USE_MOCK_EMAIL === "true" || !process.env.RESEND_API_KEY;

// Dynamically import the appropriate implementation
async function getImpl() {
  if (useMock) {
    console.log("[Email] Using mock email service");
    return import("./mock-resend");
  }
  return import("./resend");
}

export async function sendVerificationEmail(
  registration: Registration,
  verificationToken: string
): Promise<{ success: boolean; error?: string }> {
  const impl = await getImpl();
  return impl.sendVerificationEmail(registration, verificationToken);
}

export async function sendConfirmationEmail(
  registration: Registration
): Promise<{ success: boolean; error?: string }> {
  const impl = await getImpl();
  return impl.sendConfirmationEmail(registration);
}
