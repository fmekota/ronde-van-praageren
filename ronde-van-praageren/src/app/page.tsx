"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Script from "next/script";
import { SegmentCard, TestimonialCard, RaceReport2025 } from "@/components";
import { EVENT_CONFIG } from "@/config/event";

export default function Home() {
  const [stravaError, setStravaError] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Header - Updated with gradient background and new design */}
      <header className="header-gradient text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
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
          </div>
          <nav aria-label="Main navigation">
            <ul className="flex space-x-6">
              <li><a href="#event" className="text-white hover:text-yellow-accent transition-colors">Event</a></li>
              <li><a href="#route" className="text-white hover:text-yellow-accent transition-colors">Route</a></li>
              <li><a href="#schedule" className="text-white hover:text-yellow-accent transition-colors">Schedule</a></li>
              <li><a href="/archive" className="text-white hover:text-yellow-accent transition-colors">Archive</a></li>
              <li><a href="https://www.strava.com/clubs/1048077/group_events/1899385" className="text-white hover:text-yellow-accent transition-colors" target="_blank" rel="noopener noreferrer">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section - Redesigned to match Canva design with cobblestone theme */}
      <section className="hero-background text-white py-32">
        <div className="container mx-auto px-4 text-left md:text-left">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 uppercase leading-tight">
            Are You<br />Cobbles Ready?
          </h2>
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-medium">6th Annual Prague Cobbled Classic</p>
            <p className="text-xl md:text-2xl font-bold">March 28, 2026</p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <a 
              href="https://www.strava.com/clubs/1048077/group_events/1899385" 
              className="btn-primary py-3 px-8 text-lg rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <a 
              href="/24_Ronde van Praageren_Úvodní slovo ředitele závodu.pdf" 
              className="bg-yellow-accent hover:bg-yellow-500 text-brown-800 py-3 px-8 border-2 border-yellow-accent rounded-md transition duration-300 flex items-center justify-center gap-2"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Director&apos;s Word
            </a>
          </div>
        </div>
      </section>

      {/* Race Report 2025 Section */}
      <RaceReport2025 />

      {/* THE FAST FACTS Section - Added to match Canva design */}
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
              <a href="/archive" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide">
                TAKE THE HISTORY PATH
              </a>
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
            
            {/* Card 3 - Registration */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3v4a1 1 0 001 1h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">REGISTRATION</h3>
              <p className="text-gray-700 mb-8">
                Find out when and where to<br />register for Ronde
              </p>
              <a href="https://www.strava.com/clubs/1048077/group_events/1899385" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide" target="_blank" rel="noopener noreferrer">
                LEARN MORE
              </a>
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

        {/* Event Details Section - Updated with new card styles and icons */}
        <section id="event" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">Event Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about the Ronde van Praageren cycling event
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
              <p className="text-gray-700 mb-2 text-lg">March 28, 2026</p>
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

        {/* Route Map Section - Updated with better styling and presentation */}
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
                          href="https://www.strava.com/routes/3433398817331358612"
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
                        data-embed-id="3433398817331358612"
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
                {EVENT_CONFIG.segments.map((segment, index) => (
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

        {/* Add Schedule Section after Route section */}
        <section id="schedule" className="mb-24 py-16 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Event Schedule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan your day with our detailed race schedule
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue">Rider Briefing</h3>
                  <p className="text-gray-600">9:30 AM - 9:45 AM</p>
                  <p className="text-gray-700 mt-1">Important safety information and course details will be provided.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue">Race Start</h3>
                  <p className="text-gray-600">10:00 AM</p>
                  <p className="text-gray-700 mt-1">The 110km Main Race begins</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue">Coffee Break</h3>
                  <p className="text-gray-600">Approximately 12:00 PM</p>
                  <p className="text-gray-700 mt-1">Coffee, tea, and snacks will be available.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">4</div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue">First Riders Finish</h3>
                  <p className="text-gray-600">Approximately 3:30 PM</p>
                  <p className="text-gray-700 mt-1">Elite riders are expected to complete the course in around 5.5 hours.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">5</div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue">Awards Ceremony</h3>
                  <p className="text-gray-600">TBD</p>
                  <p className="text-gray-700 mt-1">Celebration and recognition of top finishers in various categories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot News Section - Press Releases */}
        <section id="hot-news" className="mb-24 py-16 bg-gray-50 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Hot News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest updates and press releases from Ronde van Praageren
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              {/* News Item */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
                <div className="md:flex md:h-[600px]">
                  <div className="md:w-2/3 relative h-96 md:h-full">
                    <Image
                      src="/hudy-press-release.png"
                      alt="Press release image - UAE Team Emirates racing schedule update"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/3 p-8 md:overflow-y-auto">
                    <div className="uppercase tracking-wide text-sm text-accent font-semibold mb-1">Press Release</div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-2">Tadej Pogačar mění jarní program, Honza Hudeček vynechá Ronde van Praageren a míří na Bikemaraton Beroun COFIDIS</h3>
                    <p className="text-gray-600 mb-4">March 28, 2025</p>
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-4">
                      Tým UAE Team Emirates oznamuje úpravu závodního programu svých jezdců před klíčovými jarními závody
                      </p>
                      <p className="mb-4">
                      Tadej Pogačar se nezúčastní závodů E3 Saxo Classic a Gent-Wevelgem, aby mohl naplno doladit formu na hlavní cíle jara – Kolem Flander (Ronde van Vlaanderen) a Paříž–Roubaix.
                      </p>
                      <p className="mb-4">
                      &ldquo;S ohledem na náročnost nadcházejících klasik jsme se rozhodli Tadejovi upravit závodní plán. Pauza mu umožní doladit přípravu a přijet do Flander i Roubaix ve špičkové formě&rdquo; uvedl sportovní ředitel Mauro Gianetti.
                      </p>
                      <p>
                      Honza Hudeček, který měl od začátku sezóny zaměřeno výhradně na Ronde van Vlaanderen, neměl závody E3 ani Gent-Wevelgem ve svém plánu. Původně plánovaná účast na Ronde van Praageren však nebude možná z organizačních důvodů. Následně Honza přesune pozornost na domácí závod Bikemaraton Beroun COFIDIS.
                      </p>
                      <p className="mb-4">
                      &ldquo;Mrzí mě, že se letos nepostavím na start Ronde van Praageren, ale mou prioritou zůstávají Flandry, kde mířím na umístění v top 10. Poté se těším na Bikemaraton Beroun COFIDIS, kde chci přenést formu z klasik na domácí tratě. A Filipovi Mekotovi přeju, ať to v Praagerenu klapne a přiveze vítězství!&rdquo; uvedl Honza Hudeček.
                      </p>
                      <p>
                      Oba jezdci nyní absolvují tréninkové soustředění zaměřené na závodní simulace a technickou přípravu, především s důrazem na pavé sektory a ostrý závodní rytmus.
                      </p>
                    </div>
                    <div className="mt-6">
                      <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover" aria-label="Read more about Tadej Pogačar and Honza Hudeček news">
                        Read more 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section - Restoring this section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re grateful to our amazing sponsors who make this event possible
            </p>
          </div>
          
          {/* Main sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center text-primary mb-8">Main Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/sponsors/ccc.png"
                    alt="CC Currywurst Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <h4 className="text-lg font-bold text-dark-blue mb-2">CC Currywurst</h4>
                <p className="text-gray-700 text-center">Organizing club and main supporter, providing event logistics and community engagement since 2020.</p>
              </div>
              
              <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/sponsors/uci.png"
                    alt="UCI Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <h4 className="text-lg font-bold text-accent mb-2">UCI</h4>
                <p className="text-gray-700 text-center">Supporting local cycling infrastructure and development of cycling culture across the globe.</p>
              </div>
              
              <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/sponsors/mapei.png"
                    alt="MAPEI Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <h4 className="text-lg font-bold text-yellow-accent mb-2">Mapei</h4>
                <p className="text-gray-700 text-center">Co to bylo mapei? Esence toho že silnička by měla být italská!</p>
              </div>
            </div>
          </div>
          
          {/* Sponsor Notes */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-center text-dark-blue mb-8">Sponsor Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-primary">CCC sponsor note</h4>
                </div>
                <p className="text-gray-800">
                  &quot;We&apos;re proud to support the Ronde van Praageren and its celebration of cycling culture in Prague. The event captures the essence of Flemish classics right in the heart of Central Europe.&quot;
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-accent transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-accent">UCI sponsor note</h4>
                </div>
                <p className="text-gray-800">
                  &quot;The challenge of the cobbles, the spirit of the riders, and the passion of the crowd make Ronde van Praageren a unique event that we&apos;re honored to be a part of. Looking forward to the 2025 edition!&quot;
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-yellow-accent transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-accent/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                    <h4 className="font-bold text-lg text-yellow-accent">Mapei sponsor note</h4>
                </div>
                <p className="text-gray-800">
                  &quot;As cycling enthusiasts ourselves, we understand the dedication it takes to conquer routes like the Praagse Burchberg and Muur Van Wijngaarden. We&apos;re excited to help bring this amazing event to life.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Updated with more authentic Czech cyclist testimonials */}
        <section className="mb-24 py-16 bg-gray-100 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Rider Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From previous editions: Hear from cyclists who experienced the cobbles of Ronde van Praageren
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {EVENT_CONFIG.testimonials.map((testimonial) => (
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

        {/* Weather Forecast Section - Added after Rider Testimonials */}
        <section className="mb-24 py-16 bg-gray-50 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Weather Forecast</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest weather conditions for your race day
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-[75%] sm:pb-[65%] md:pb-[60%] lg:pb-[55%]">
                  <iframe
                    src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=5&overlay=wind&product=ecmwf&level=surface&lat=47.488&lon=14.458&detailLat=50.1&detailLon=14.467&detail=true&pressure=true&message=true"
                    frameBorder="0"
                    title="Weather Forecast Map"
                    className="absolute inset-0 w-full h-full"
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                Check the forecast regularly before the event for the most accurate weather predictions. 
                Being prepared for the weather conditions will help you have the best racing experience.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section - New section */}
        <section className="mb-24 py-16 bg-dark-blue text-white -mx-4 px-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 4.528c.31-.11.65-.11.96 0l7.133 2.56a1.5 1.5 0 010 2.82L11.96 12.472a1.5 1.5 0 01-.96 0L3.867 9.91a1.5 1.5 0 010-2.82L10 4.528zm.96 11.448a1.5 1.5 0 01-.96 0l-7.133-2.56a1.5 1.5 0 010-2.82l1.473-.53a1 1 0 00.945 1.345h9.43a1 1 0 00.945-1.345l1.473.53a1.5 1.5 0 010 2.82l-7.133 2.56z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the Cobblestone Challenge?</h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Join hundreds of cyclists in Prague&apos;s most authentic Flemish-style race
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="https://www.strava.com/clubs/1048077/group_events/1899385" className="btn-primary py-4 px-8 text-lg rounded-md" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
                <a 
                  href="/24_Ronde van Praageren_Úvodní slovo ředitele závodu.pdf" 
                  className="bg-transparent hover:bg-white/10 text-white text-lg py-4 px-8 border-2 border-white rounded-md transition duration-300 flex items-center gap-2"
                  download
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Director&apos;s Word
                </a>
              </div>
              <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Registration Closing Soon</p>
                    <p className="text-gray-300">March 27, 2026</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Limited Spots Available</p>
                    <p className="text-gray-300">800 riders maximum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section (temporarily disabled) */}
        {/* Uncomment this section when registration is ready
        <section id="register" className="mb-24 py-16 bg-dark-blue -mx-4 px-4 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Register Now</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Secure your spot in Prague&apos;s most exciting cycling event
              </p>
            </div>
          </div>
        </section>
        */}
      </main>

      {/* Footer - Updated with new design */}
      <footer className="bg-dark-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Ronde van Praageren</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                The premier cycling event in Prague, challenging riders with beautiful routes and unforgettable experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-accent" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-accent" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.189-1.118.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/cc_currywurst?igsh=Y2EzbXNvY3VuMjcy" className="text-white hover:text-yellow-accent" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.668-.072 4.948-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#event" className="text-gray-300 hover:text-yellow-accent">Event Details</a></li>
                <li><a href="#route" className="text-gray-300 hover:text-yellow-accent">Race Route</a></li>
                <li><a href="#schedule" className="text-gray-300 hover:text-yellow-accent">Schedule</a></li>
                <li><a href="/archive" className="text-gray-300 hover:text-yellow-accent">Archive</a></li>
                <li><a href="https://www.strava.com/clubs/1048077/group_events/1899385" className="text-gray-300 hover:text-yellow-accent" target="_blank" rel="noopener noreferrer">Registration</a></li>
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
            <p className="text-gray-400">© 2026 Ronde van Praageren. All rights reserved.</p>
            <p className="text-gray-400 mt-2 md:mt-0">
              <a href="#" className="hover:text-yellow-accent">Privacy Policy</a> | 
              <a href="#" className="hover:text-yellow-accent ml-2">Terms of Service</a>
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
