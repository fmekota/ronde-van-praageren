import { NextRequest, NextResponse } from "next/server";
import {
  getRegistrationIdByToken,
  getRegistration,
  verifyRegistration,
  deleteVerificationToken,
} from "@/lib/db";
import { sendConfirmationEmail } from "@/lib/email";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  // No token provided
  if (!token) {
    return NextResponse.redirect(
      new URL("/verify?status=error&reason=missing_token", request.url)
    );
  }

  try {
    // Get registration ID from token
    const registrationId = await getRegistrationIdByToken(token);

    // Token not found or expired
    if (!registrationId) {
      return NextResponse.redirect(
        new URL("/verify?status=error&reason=expired", request.url)
      );
    }

    // Get registration
    const registration = await getRegistration(registrationId);

    // Registration not found
    if (!registration) {
      return NextResponse.redirect(
        new URL("/verify?status=error&reason=not_found", request.url)
      );
    }

    // Already verified
    if (registration.emailVerified) {
      return NextResponse.redirect(
        new URL(
          `/verify?status=success&number=${registration.startNumber}&already=true`,
          request.url
        )
      );
    }

    // Verify the registration and get start number
    const startNumber = await verifyRegistration(registrationId);

    if (!startNumber) {
      return NextResponse.redirect(
        new URL("/verify?status=error&reason=verification_failed", request.url)
      );
    }

    // Delete the used token
    await deleteVerificationToken(token);

    // Get updated registration and send confirmation email
    const verifiedRegistration = await getRegistration(registrationId);
    if (verifiedRegistration) {
      await sendConfirmationEmail(verifiedRegistration);
    }

    // Redirect to success page
    return NextResponse.redirect(
      new URL(`/verify?status=success&number=${startNumber}`, request.url)
    );
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.redirect(
      new URL("/verify?status=error&reason=server_error", request.url)
    );
  }
}
