import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Ronde van Praageren",
  description: "Explore the history of Ronde van Praageren - Prague's premier cobbled cycling classic.",
};

const pastEvents = [
  {
    year: 2025,
    date: "March 29, 2025",
    tagline: "5th Annual Prague Cobbled Classic",
    description: "The 5th edition brought together hundreds of cyclists for 110km of cobblestones and steep climbs through Prague.",
    href: "/archive/2025",
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="header-gradient text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-3">
              <Image
                src="/logo.png"
                alt="Ronde van Praageren Logo"
                width={56}
                height={56}
                className="w-14 h-14"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
                Ronde Van<br />Praageren
              </h1>
              <p className="text-xs text-gray-300">by CC Currywurst</p>
            </div>
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-white hover:text-yellow-accent transition-colors">Home</Link></li>
              <li><Link href="/archive" className="text-yellow-accent font-semibold">Archive</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-dark-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            Ronde van Praageren Archive
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore the rich history of Prague&apos;s premier cobbled cycling classic
          </p>
        </div>
      </section>

      {/* Past Events */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-dark-blue mb-8 text-center">Past Editions</h3>

          <div className="grid gap-8">
            {pastEvents.map((event) => (
              <Link
                key={event.year}
                href={event.href}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-4xl font-bold text-primary">{event.year}</span>
                        <span className="bg-yellow-accent text-brown-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.tagline}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{event.date}</p>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-flex items-center text-primary font-semibold">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Ready for the next edition?</p>
            <Link
              href="/"
              className="inline-block btn-primary py-3 px-8 text-lg rounded-md"
            >
              View 2026 Event
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 Ronde van Praageren. All rights reserved.</p>
          <Link href="/" className="text-yellow-accent hover:underline mt-2 inline-block">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
