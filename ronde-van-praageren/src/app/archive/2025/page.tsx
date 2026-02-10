"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { SegmentCard, TestimonialCard } from "@/components";
import { EVENT_CONFIG_2025 } from "@/config/archive/2025";

export default function Archive2025Page() {
  const [stravaError, setStravaError] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Archive Banner */}
      <div className="bg-yellow-accent text-brown-800 py-3 text-center font-semibold">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>This is an archived page from the 2025 edition.</span>
          <Link href="/" className="underline hover:no-underline">View current event</Link>
        </div>
      </div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

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
      <section className="hero-background text-white py-32">
        <div className="container mx-auto px-4 text-left md:text-left">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 uppercase leading-tight">
            Are You<br />Cobbles Ready?
          </h2>
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-medium">5th Annual Prague Cobbled Classic</p>
            <p className="text-xl md:text-2xl font-bold">March 29, 2025</p>
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="btn-primary py-3 px-8 text-lg rounded-md inline-block"
            >
              View 2026 Event
            </Link>
          </div>
        </div>
      </section>

      {/* THE FAST FACTS Section */}
      <section className="py-20 bg-yellow-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-brown-800 text-center tracking-wide uppercase">
            THE FAST FACTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Ronde History */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">RONDE HISTORY</h3>
              <p className="text-gray-700 mb-8">
                Take a look at the history of<br />Ronde van Praageren
              </p>
              <Link href="/archive" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide">
                TAKE THE HISTORY PATH
              </Link>
            </div>

            {/* Card 2 - The Course */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-17a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">THE COURSE</h3>
              <p className="text-gray-700 mb-8">
                Read important information on<br />the course and distance
              </p>
              <a href="#route" className="inline-block py-3 px-6 bg-olive-600 text-white font-bold rounded hover:bg-olive-700 transition duration-300 uppercase tracking-wide">
                EXPLORE COURSE
              </a>
            </div>

            {/* Card 3 - Current Event */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3v4a1 1 0 001 1h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">2026 EVENT</h3>
              <p className="text-gray-700 mb-8">
                Check out the upcoming<br />2026 edition
              </p>
              <Link href="/" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide">
                VIEW 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-12">
        {/* Race Director Citation Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">From the Race Director</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The spirit of Ronde van Praageren from our Race Director
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/race_director.png"
                  alt="Janek Pedersen Lžičař, Race Director of Ronde van Praageren"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                &quot;Když se řekne cyklistika, vybaví se většině lidí jen jedno slovo: &ldquo;pavé&rdquo;. Co se ale skrývá v srdci tohoto pojmu a je skutečně padnoucí pro region střední Evropy? Již 5 let nacházíme opakovaně jak ve svých srdcích, tak v dlážděných ulicích v okolí Prahy, odpověď na tuto otázku ve znění: &ldquo;ne&rdquo;. Praze, jako odvěké součásti regionu Západních Flander, totiž mnohem vice sluší vlámština a s tím spojené náležité označení segmentů. Přitom dnes snad není pražského cyklisty, který by neměl povědomí o věhlasu Uibergu, Oude Wittemontu, Praagse Burchbergu nebo Muur Van Wijngaarden. Den plný kostek, prudkých stoupání, nesmyslného závodění, gastronomie, soudržnosti a svornosti, máte možnost zažít právě teď na Ronde Van Praageren. Přidej se k nám na nezapomenutelnou jízdu po stopách opravdové cyklistiky!.&quot;
                <br /><br />
                &quot;When we say cycling, most people think of one word: &lsquo;pavé&rsquo;. But what lies at the heart of this concept and is it truly fitting for the Central European region? For 5 years now, we have repeatedly found, both in our hearts and in the cobbled streets around Prague, the answer to this question: &lsquo;no&rsquo;. Prague, as an eternal part of the Western Flanders region, is much better suited to Flemish and the associated proper designation of segments. Today, there is hardly a Prague cyclist who would not be aware of the fame of Uiberg, Oude Wittemont, Praagse Burchberg or Muur Van Wijngaarden. A day full of cobblestones, steep climbs, senseless racing, gastronomy, cohesion and harmony - you have the opportunity to experience it right now at Ronde Van Praageren. Join us for an unforgettable ride following the footsteps of real cycling!&quot;
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-dark-blue text-xl">Janek &quot;Pedersen&quot; Lžičař</p>
                  <p className="text-gray-600">Race Director, Ronde van Praageren</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section id="event" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">Event Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about the 2025 Ronde van Praageren cycling event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-custom bg-white p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark-blue">Date & Time</h3>
              <p className="text-gray-700 mb-2 text-lg">March 29, 2025</p>
              <p className="text-gray-700 text-lg">Starting at 10:00 AM</p>
            </div>

            <div className="card-custom bg-white p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark-blue">Location</h3>
              <p className="text-gray-700 mb-2 text-lg">Prague City Center</p>
              <p className="text-gray-700 text-lg">Starting Point: Výstaviště</p>
            </div>

            <div className="card-custom bg-white p-8 text-center">
              <div className="w-20 h-20 bg-yellow-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark-blue">Distance</h3>
              <p className="text-gray-700 mb-2 text-lg">110km Main Race</p>
            </div>
          </div>
        </section>

        {/* Route Map Section */}
        <section id="route" className="mb-24 py-16 bg-gray-100 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Race Route</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the challenging 110km route through Prague&apos;s most scenic landscapes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg relative">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-6 text-olive-500 text-center">FOLLOW THE RACE</h3>
                    <p className="text-lg text-gray-700 mb-8 text-center">
                      Study the terrain, even as you train. Prepare for the cobbles of Prague
                    </p>
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto relative border-2 border-olive-500">
                      <Image
                        src="/race_director.png"
                        alt="Janek Pedersen Lžičař, Race Director"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 128px"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center">Race Director Message</h3>
                    <p className="text-center text-gray-500 mb-6">A day full of cobblestones, steep climbs, and senseless racing</p>
                    <div className="text-center">
                      <a
                        href="/24_Ronde van Praageren_Úvodní slovo ředitele závodu.pdf"
                        className="inline-block py-3 px-6 bg-olive-600 text-white font-bold rounded hover:bg-olive-700 transition duration-300"
                        download
                      >
                        Download Full Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-full">
                <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="h-full">
                    {/* Strava embed code */}
                    {stravaError ? (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <p className="text-gray-600 mb-4">Unable to load route map.</p>
                        <a
                          href="https://www.strava.com/routes/3199162964264401098"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          View route on Strava
                        </a>
                      </div>
                    ) : (
                      <div
                        className="strava-embed-placeholder h-full"
                        data-embed-type="route"
                        data-embed-id="3199162964264401098"
                        data-style="standard"
                        data-from-embed="false"
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-accent/10 rounded-md">
              <h3 className="font-bold text-dark-blue text-3xl mb-8 font-geist-sans text-center">Famous Segments</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {EVENT_CONFIG_2025.segments.map((segment, index) => (
                  <SegmentCard
                    key={segment.name}
                    name={segment.name}
                    length={segment.length}
                    grade={segment.grade}
                    image={segment.image}
                    position={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Elevation Gain</h3>
                <p className="text-gray-700">1400 meters</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Terrain Type</h3>
                <p className="text-gray-700">Road, &ldquo;Some&rdquo; COBBLES</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Difficulty</h3>
                <p className="text-gray-700">Epic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="mb-24 py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Event Schedule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The race day schedule for 2025
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {EVENT_CONFIG_2025.schedule.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker">{item.id}</div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue">{item.title}</h3>
                    <p className="text-gray-600">{item.time}</p>
                    <p className="text-gray-700 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-24 py-16 bg-gray-100 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Rider Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from cyclists who experienced the cobbles of Ronde van Praageren
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {EVENT_CONFIG_2025.testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  colorClass={testimonial.colorClass}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24 py-16 bg-dark-blue text-white -mx-4 px-4 overflow-hidden relative">
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the 2026 Edition?</h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Join us for the 6th Annual Prague Cobbled Classic
              </p>
              <Link
                href="/"
                className="btn-primary py-4 px-8 text-lg rounded-md inline-block"
              >
                View 2026 Event
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Ronde van Praageren</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                The premier cycling event in Prague, challenging riders with beautiful routes and unforgettable experiences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-yellow-accent">Current Event</Link></li>
                <li><Link href="/archive" className="text-gray-300 hover:text-yellow-accent">Archive</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">info@rondevanpraageren.cz</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+420 721 857 781</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-gray-400">&copy; 2025 Ronde van Praageren. All rights reserved.</p>
            <p className="text-gray-400 mt-2 md:mt-0">
              <Link href="/archive" className="hover:text-yellow-accent">Back to Archive</Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Strava embed script with error handling */}
      <Script
        src="https://strava-embeds.com/embed.js"
        strategy="afterInteractive"
        onError={() => setStravaError(true)}
      />
    </div>
  );
}
