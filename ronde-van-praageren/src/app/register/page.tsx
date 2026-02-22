import { Metadata } from "next";
import Link from "next/link";
import { RegistrationForm } from "@/components/registration";
import { EVENT_CONFIG } from "@/config/event";
import { REGISTRATION_CONFIG } from "@/config/registration";
import { getVerifiedCount } from "@/lib/db";

export const metadata: Metadata = {
  title: `Register | ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}`,
  description: `Register for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}. Join hundreds of cyclists for Prague's premier cycling event.`,
};

export default async function RegisterPage() {
  let verifiedCount = 0;
  try {
    verifiedCount = await getVerifiedCount();
  } catch {
    // KV not configured, use default
  }
  const spotsRemaining = REGISTRATION_CONFIG.maxParticipants - verifiedCount;
  const percentFull = Math.round(
    (verifiedCount / REGISTRATION_CONFIG.maxParticipants) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register for {EVENT_CONFIG.year}
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {EVENT_CONFIG.date} · Prague, Czech Republic
          </p>

          {/* Capacity indicator */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{verifiedCount} registered</span>
              <span>{spotsRemaining} spots left</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                style={{ width: `${percentFull}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {REGISTRATION_CONFIG.maxParticipants} maximum participants
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <RegistrationForm />
        </div>

        {/* Info Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
            <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
              <li>Submit this registration form</li>
              <li>Check your email for verification link</li>
              <li>Click the link to confirm registration</li>
              <li>Receive your start number via email</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              If you encounter any issues with registration, please contact us.
            </p>
            <a
              href={`mailto:${REGISTRATION_CONFIG.email.replyTo}`}
              className="text-sm text-primary hover:underline"
            >
              {REGISTRATION_CONFIG.email.replyTo}
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
          <p>&copy; {EVENT_CONFIG.year} {EVENT_CONFIG.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
