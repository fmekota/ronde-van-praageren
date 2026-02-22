import { Metadata } from "next";
import Link from "next/link";
import { EVENT_CONFIG } from "@/config/event";
import { getVerifiedRegistrations } from "@/lib/db";

export const metadata: Metadata = {
  title: `Startlist | ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}`,
  description: `View the official startlist for ${EVENT_CONFIG.name} ${EVENT_CONFIG.year}.`,
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function StartlistPage() {
  let registrations: Awaited<ReturnType<typeof getVerifiedRegistrations>> = [];
  try {
    registrations = await getVerifiedRegistrations();
  } catch {
    // KV not configured
  }

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
              href="/register"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Startlist</h1>
          <p className="text-gray-600 text-lg mb-2">
            {EVENT_CONFIG.name} {EVENT_CONFIG.year}
          </p>
          <p className="text-gray-500">{EVENT_CONFIG.date}</p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold text-primary">
              {registrations.length}
            </span>
            <span className="text-gray-600">
              registered {registrations.length === 1 ? "rider" : "riders"}
            </span>
          </div>
        </div>

        {/* Startlist Table */}
        {registrations.length > 0 ? (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 w-20">
                    #
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 hidden md:table-cell">
                    Club
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {registrations.map((registration) => (
                  <tr
                    key={registration.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary font-bold rounded-full">
                        {registration.startNumber}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {registration.firstName} {registration.lastName}
                        </span>
                        {registration.stravaProfile && (
                          <a
                            href={registration.stravaProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-orange-500 hover:text-orange-600"
                            title="View Strava Profile"
                          >
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                            </svg>
                          </a>
                        )}
                      </div>
                      {/* Show club on mobile below name */}
                      {registration.club && (
                        <div className="text-sm text-gray-500 md:hidden">
                          {registration.club}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-600 hidden md:table-cell">
                      {registration.club || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No Registrations Yet
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to register for {EVENT_CONFIG.name} {EVENT_CONFIG.year}!
            </p>
            <Link
              href="/register"
              className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Register Now
            </Link>
          </div>
        )}

        {/* Register CTA */}
        {registrations.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/register"
              className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Register Now
            </Link>
          </div>
        )}
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
