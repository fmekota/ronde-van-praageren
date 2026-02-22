import { Resend } from "resend";
import { Registration } from "@/lib/schemas/registration";
import { REGISTRATION_CONFIG } from "@/config/registration";
import { EVENT_CONFIG } from "@/config/event";

// Lazy initialize Resend client
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

// Send verification email
export async function sendVerificationEmail(
  registration: Registration,
  verificationToken: string
): Promise<{ success: boolean; error?: string }> {
  const verificationLink = `${getBaseUrl()}/api/verify?token=${verificationToken}`;

  try {
    const { error } = await getResend().emails.send({
      from: REGISTRATION_CONFIG.email.from,
      replyTo: REGISTRATION_CONFIG.email.replyTo,
      to: registration.email,
      subject: `Verify your ${EVENT_CONFIG.name} ${EVENT_CONFIG.year} registration`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #FF5733; margin-bottom: 10px;">${EVENT_CONFIG.name}</h1>
    <p style="color: #666; font-size: 18px;">${EVENT_CONFIG.year} Registration</p>
  </div>

  <div style="background: #f9f9f9; border-radius: 8px; padding: 30px; margin-bottom: 30px;">
    <h2 style="margin-top: 0; color: #333;">Hi ${registration.firstName},</h2>
    <p>Thank you for registering for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}!</p>
    <p>Please click the button below to verify your email address and complete your registration:</p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${verificationLink}"
         style="background: #FF5733; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
        Verify Email Address
      </a>
    </div>

    <p style="color: #666; font-size: 14px;">This link will expire in 24 hours.</p>

    <p style="color: #666; font-size: 14px;">If the button doesn't work, copy and paste this link into your browser:</p>
    <p style="color: #666; font-size: 12px; word-break: break-all;">${verificationLink}</p>
  </div>

  <div style="background: #f0f0f0; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
    <h3 style="margin-top: 0; color: #333;">Your Registration Details:</h3>
    <p><strong>Name:</strong> ${registration.firstName} ${registration.lastName}</p>
    ${registration.club ? `<p><strong>Club:</strong> ${registration.club}</p>` : ""}
    <p><strong>Emergency Contact:</strong> ${registration.emergencyName} (${registration.emergencyPhone})</p>
  </div>

  <div style="text-align: center; color: #999; font-size: 12px;">
    <p>If you didn't register for this event, you can safely ignore this email.</p>
    <p>&copy; ${EVENT_CONFIG.year} ${EVENT_CONFIG.name}</p>
  </div>
</body>
</html>
      `,
      text: `
Hi ${registration.firstName},

Thank you for registering for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}!

Please click the link below to verify your email address and complete your registration:

${verificationLink}

This link will expire in 24 hours.

Your Registration Details:
- Name: ${registration.firstName} ${registration.lastName}
${registration.club ? `- Club: ${registration.club}` : ""}
- Emergency Contact: ${registration.emergencyName} (${registration.emergencyPhone})

If you didn't register for this event, you can safely ignore this email.

© ${EVENT_CONFIG.year} ${EVENT_CONFIG.name}
      `.trim(),
    });

    if (error) {
      console.error("Failed to send verification email:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Email sending error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

// Send confirmation email with start number
export async function sendConfirmationEmail(
  registration: Registration
): Promise<{ success: boolean; error?: string }> {
  if (!registration.startNumber) {
    return { success: false, error: "No start number assigned" };
  }

  try {
    const { error } = await getResend().emails.send({
      from: REGISTRATION_CONFIG.email.from,
      replyTo: REGISTRATION_CONFIG.email.replyTo,
      to: registration.email,
      subject: `${EVENT_CONFIG.name} ${EVENT_CONFIG.year} - Registration Confirmed! Start #${registration.startNumber}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color: #FF5733; margin-bottom: 10px;">${EVENT_CONFIG.name}</h1>
    <p style="color: #666; font-size: 18px;">${EVENT_CONFIG.year} Registration Confirmed!</p>
  </div>

  <div style="background: linear-gradient(135deg, #FF5733, #3CAEA3); border-radius: 12px; padding: 40px; margin-bottom: 30px; text-align: center;">
    <p style="color: rgba(255,255,255,0.9); margin: 0 0 10px 0; font-size: 16px;">Your Start Number</p>
    <div style="background: white; width: 120px; height: 120px; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <span style="font-size: 48px; font-weight: bold; color: #FF5733;">${registration.startNumber}</span>
    </div>
  </div>

  <div style="background: #f9f9f9; border-radius: 8px; padding: 30px; margin-bottom: 30px;">
    <h2 style="margin-top: 0; color: #333;">Congratulations, ${registration.firstName}!</h2>
    <p>Your registration for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year} is now complete.</p>
    <p>Your start number is <strong>#${registration.startNumber}</strong>. Please remember this number - you'll need it on race day!</p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${getBaseUrl()}/startlist"
         style="background: #3CAEA3; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
        View Startlist
      </a>
    </div>
  </div>

  <div style="background: #f0f0f0; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
    <h3 style="margin-top: 0; color: #333;">Important Information:</h3>
    <ul style="padding-left: 20px;">
      <li>Date: ${EVENT_CONFIG.date}</li>
      <li>Check-in opens 1 hour before the start</li>
      <li>Bring this email or screenshot of your start number</li>
      <li>Don't forget your helmet and bike!</li>
    </ul>
  </div>

  <div style="text-align: center; color: #999; font-size: 12px;">
    <p>See you at the start line!</p>
    <p>&copy; ${EVENT_CONFIG.year} ${EVENT_CONFIG.name}</p>
  </div>
</body>
</html>
      `,
      text: `
Congratulations, ${registration.firstName}!

Your registration for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year} is now complete.

YOUR START NUMBER: #${registration.startNumber}

Please remember this number - you'll need it on race day!

View the full startlist at: ${getBaseUrl()}/startlist

Important Information:
- Date: ${EVENT_CONFIG.date}
- Check-in opens 1 hour before the start
- Bring this email or screenshot of your start number
- Don't forget your helmet and bike!

See you at the start line!

© ${EVENT_CONFIG.year} ${EVENT_CONFIG.name}
      `.trim(),
    });

    if (error) {
      console.error("Failed to send confirmation email:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Email sending error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
