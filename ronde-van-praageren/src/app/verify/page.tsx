import { Metadata } from "next";
import Link from "next/link";
import { EVENT_CONFIG } from "@/config/event";

export const metadata: Metadata = {
  title: `Verification | ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}`,
  description: `Email verification for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}.`,
};

interface VerifyPageProps {
  searchParams: Promise<{
    status?: string;
    number?: string;
    reason?: string;
    already?: string;
  }>;
}

const errorMessages: Record<string, string> = {
  missing_token: "No verification token was provided.",
  expired: "This verification link has expired. Please register again.",
  not_found: "Registration not found. Please register again.",
  verification_failed: "Verification failed. Please try again or contact support.",
  server_error: "An unexpected error occurred. Please try again later.",
};

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const params = await searchParams;
  const { status, number, reason, already } = params;

  const isSuccess = status === "success";
  const startNumber = number ? parseInt(number, 10) : null;
  const errorMessage = reason ? errorMessages[reason] || "An error occurred." : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {EVENT_CONFIG.name}
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/startlist"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Startlist
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {isSuccess ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {already ? "Already Verified!" : "Registration Confirmed!"}
              </h1>

              {startNumber && (
                <div className="my-8">
                  <p className="text-sm text-gray-500 mb-2">Your Start Number</p>
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full">
                    <span className="text-5xl font-bold text-white">
                      {startNumber}
                    </span>
                  </div>
                </div>
              )}

              <p className="text-gray-600 mb-6">
                {already
                  ? "Your registration was already confirmed."
                  : "You're all set for the event! We've sent a confirmation email with your start number."}
              </p>

              <div className="space-y-3">
                <Link
                  href="/startlist"
                  className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Startlist
                </Link>
                <Link
                  href="/"
                  className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Verification Failed
              </h1>

              <p className="text-gray-600 mb-6">
                {errorMessage || "Something went wrong with your verification."}
              </p>

              <div className="space-y-3">
                <Link
                  href="/register"
                  className="block w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Register Again
                </Link>
                <Link
                  href="/"
                  className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>&copy; {EVENT_CONFIG.year} {EVENT_CONFIG.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
