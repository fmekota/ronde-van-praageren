import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rondevanpraageren.cz"),
  title: "Ronde van Praageren | 6th Annual Prague Cobbled Classic",
  description:
    "Join the 6th Annual Ronde van Praageren cycling race on March 28, 2026. Experience 110km of cobblestones, steep climbs, and Flemish-style racing through Prague.",
  keywords: [
    "cycling race",
    "Prague",
    "cobblestones",
    "Ronde van Praageren",
    "cycling event",
    "cobbled classic",
    "bike race",
  ],
  authors: [{ name: "CC Currywurst" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Ronde van Praageren | 6th Annual Prague Cobbled Classic",
    description:
      "Join the 6th Annual Ronde van Praageren cycling race on March 28, 2026. Experience 110km of cobblestones, steep climbs, and Flemish-style racing through Prague.",
    url: "https://rondevanpraageren.cz",
    siteName: "Ronde van Praageren",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/cobblestone-cyclist.jpg",
        width: 1200,
        height: 630,
        alt: "Cyclists racing on cobblestones at Ronde van Praageren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronde van Praageren | 6th Annual Prague Cobbled Classic",
    description:
      "Join the 6th Annual Ronde van Praageren cycling race on March 28, 2026. Experience 110km of cobblestones and Flemish-style racing.",
    images: ["/cobblestone-cyclist.jpg"],
  },
  alternates: {
    canonical: "https://rondevanpraageren.cz",
  },
};

// JSON-LD structured data for the event
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Ronde van Praageren 2026",
  description:
    "6th Annual Prague Cobbled Classic - A 110km cycling race featuring cobblestones, steep climbs, and Flemish-style racing through Prague.",
  startDate: "2026-03-28T10:00:00+01:00",
  endDate: "2026-03-28T18:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Výstaviště Praha",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Výstaviště",
      addressLocality: "Prague",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.1,
      longitude: 14.467,
    },
  },
  organizer: {
    "@type": "Organization",
    name: "CC Currywurst",
    url: "https://www.instagram.com/cc_currywurst",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.strava.com/clubs/1048077/group_events/1899385",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
  sport: "Cycling",
  maximumAttendeeCapacity: 800,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="dns-prefetch" href="https://strava-embeds.com" />
        <link rel="dns-prefetch" href="https://embed.windy.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
