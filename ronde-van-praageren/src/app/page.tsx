"use client";

import { FormEvent, useState, useEffect } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load Strava embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, you would submit to Formspree here
    // For example:
    // const formData = new FormData(e.currentTarget);
    // await fetch("https://formspree.io/f/your-form-id", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     "Accept": "application/json"
    //   }
    // });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header - Updated with gradient background and new design */}
      <header className="header-gradient text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="w-14 h-14 relative">
                <div className="absolute w-full h-full bg-yellow-accent rounded-sm transform rotate-6"></div>
                <div className="absolute w-8 h-8 bg-primary rounded-sm top-1 left-4"></div>
                <div className="absolute w-6 h-6 bg-accent rounded-sm bottom-2 right-1"></div>
                <div className="absolute w-4 h-4 bg-dark-blue rounded-sm bottom-3 left-2"></div>
                <div className="absolute w-4 h-4 bg-black rounded-sm top-3 right-3"></div>
                <div className="absolute w-3 h-3 bg-gray-400 rounded-sm top-6 left-5"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
                Ronde Van<br />Praageren
              </h1>
              <p className="text-xs text-gray-300">by CC Currywurst</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#event" className="text-white hover:text-yellow-accent transition-colors">Event</a></li>
              <li><a href="#route" className="text-white hover:text-yellow-accent transition-colors">Route</a></li>
              <li><a href="#schedule" className="text-white hover:text-yellow-accent transition-colors">Schedule</a></li>
              <li><a href="#register" className="text-white hover:text-yellow-accent transition-colors">Register</a></li>
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
            <p className="text-xl md:text-2xl font-medium">4th Annual Prague Cobbled Classic</p>
            <p className="text-xl md:text-2xl font-bold">APRIL 6, 2024</p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <a 
              href="#register" 
              className="btn-primary py-3 px-8 text-lg rounded-md"
            >
              Register Now
            </a>
            <a 
              href="/brochure.pdf" 
              className="bg-transparent hover:bg-white/10 text-white py-3 px-8 border-2 border-white rounded-md transition duration-300 flex items-center justify-center gap-2"
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">RONDE HISTORY</h3>
              <p className="text-gray-700 mb-8">
                Take a look at the history of<br />Ronde van Praageren
              </p>
              <a href="#history" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide">
                TAKE THE HISTORY PATH
              </a>
            </div>
            
            {/* Card 2 - The Course */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3v4a1 1 0 001 1h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide uppercase">REGISTRATION</h3>
              <p className="text-gray-700 mb-8">
                Find out when and where to<br />register for Ronde
              </p>
              <a href="#register" className="inline-block py-3 px-6 bg-brown-700 text-white font-bold rounded hover:bg-brown-800 transition duration-300 uppercase tracking-wide">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark-blue">Date & Time</h3>
              <p className="text-gray-700 mb-2 text-lg">March 29, 2025</p>
              <p className="text-gray-700 text-lg">Starting at 9:00 AM</p>
            </div>
            
            <div className="card-custom bg-white p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark-blue">Distance</h3>
              <p className="text-gray-700 mb-2 text-lg">110km Main Race</p>
              <p className="text-gray-700 text-lg">45km Leisure Ride</p>
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
            
            <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                {/* Strava embed code */}
                <div 
                  className="strava-embed-placeholder" 
                  data-embed-type="route" 
                  data-embed-id="3199162964264401098" 
                  data-style="standard" 
                  data-from-embed="false"
                ></div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Elevation Gain</h3>
                <p className="text-gray-700">1,250 meters</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Terrain Type</h3>
                <p className="text-gray-700">Road, Some Gravel Sections</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">Difficulty</h3>
                <p className="text-gray-700">Challenging</p>
              </div>
            </div>
          </div>
        </section>

        {/* Add Schedule Section after Route section */}
        <section id="schedule" className="mb-24">
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
                <h3 className="text-xl font-bold text-dark-blue">Registration & Check-in</h3>
                <p className="text-gray-600">7:00 AM - 8:30 AM</p>
                <p className="text-gray-700 mt-1">Arrive early to complete your registration and collect your race number and timing chip.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue">Rider Briefing</h3>
                <p className="text-gray-600">8:30 AM - 8:45 AM</p>
                <p className="text-gray-700 mt-1">Important safety information and course details will be provided.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue">Race Start</h3>
                <p className="text-gray-600">9:00 AM</p>
                <p className="text-gray-700 mt-1">The 110km Main Race begins. Leisure ride starts 15 minutes later.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue">First Riders Finish</h3>
                <p className="text-gray-600">Approximately 12:30 PM</p>
                <p className="text-gray-700 mt-1">Elite riders are expected to complete the course in around 3.5 hours.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div>
                <h3 className="text-xl font-bold text-dark-blue">Awards Ceremony</h3>
                <p className="text-gray-600">3:00 PM</p>
                <p className="text-gray-700 mt-1">Celebration and recognition of top finishers in various categories.</p>
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
          
          {/* Gold tier sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center text-primary mb-8">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center h-32">
                <div className="text-xl font-bold text-gray-400">Sponsor Logo 1</div>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center h-32">
                <div className="text-xl font-bold text-gray-400">Sponsor Logo 2</div>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center h-32">
                <div className="text-xl font-bold text-gray-400">Sponsor Logo 3</div>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center h-32">
                <div className="text-xl font-bold text-gray-400">Sponsor Logo 4</div>
              </div>
            </div>
          </div>
          
          {/* Silver tier sponsors */}
          <div>
            <h3 className="text-xl font-bold text-center text-accent mb-8">Silver Sponsors</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 5</div>
              </div>
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 6</div>
              </div>
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 7</div>
              </div>
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 8</div>
              </div>
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 9</div>
              </div>
              <div className="p-3 bg-white shadow-md rounded-lg flex items-center justify-center h-20">
                <div className="text-sm font-bold text-gray-400">Sponsor 10</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - New section */}
        <section className="mb-24 py-16 bg-gray-100 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-blue">Rider Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from cyclists who participated in previous editions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    &ldquo;The Ronde van Praageren was the most challenging and rewarding cycling experience I&apos;ve had. The course was beautiful and the organization was flawless.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-dark-blue">Martin Novák</h4>
                      <p className="text-gray-600">2024 Participant</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-accent rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    &ldquo;I&apos;ve participated in many races across Europe, but the atmosphere at Ronde van Praageren is truly special. The locals cheering along the route gave me energy to push through the tough climbs.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-dark-blue">Klara Svobodová</h4>
                      <p className="text-gray-600">3-Time Participant</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 italic mb-6">
                    &ldquo;What stands out about this race is the amazing support from volunteers and fellow cyclists. The rest stops were well-stocked and the after-party was fantastic!&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold text-dark-blue">Tomáš Dvořák</h4>
                      <p className="text-gray-600">2023 &amp; 2024 Participant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOLLOW THE RACE Section - Added to match Canva design */}
        <section className="mb-24 py-20 bg-gray-50 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Text content */}
              <div className="flex flex-col justify-start">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-olive-500 uppercase tracking-wide leading-tight">
                  FOLLOW<br />THE RACE
                </h2>
                <p className="text-xl text-gray-700 mb-12">
                  Study the terrain, even as you train.
                </p>
                
                <div className="bg-white p-8 rounded-lg shadow-lg relative">
                  <div className="flex flex-col">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto">
                      <img src="/race-director.jpg" alt="Race Director" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center">Race Director Message</h3>
                    <p className="text-center text-gray-500 mb-8">TBD</p>
                    <div className="text-center">
                      <a href="#" className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Map */}
              <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  {/* Strava embed code for the race route */}
                  <div 
                    className="strava-embed-placeholder" 
                    data-embed-type="route" 
                    data-embed-id="3199162964264401098" 
                    data-style="standard" 
                    data-from-embed="false"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - New section */}
        <section className="mb-24 py-16 bg-dark-blue text-white -mx-4 px-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 4.528c.31-.11.65-.11.96 0l7.133 2.56a1.5 1.5 0 010 2.82L11.96 12.472a1.5 1.5 0 01-.96 0L3.867 9.91a1.5 1.5 0 010-2.82L10 4.528zm.96 11.448a1.5 1.5 0 01-.96 0l-7.133-2.56a1.5 1.5 0 010-2.82l1.473-.53a1 1 0 00.945 1.345h9.43a1 1 0 00.945-1.345l1.473.53a1.5 1.5 0 010 2.82l-7.133 2.56z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="container mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the Challenge?</h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Join hundreds of cyclists in Prague&apos;s most exciting race event
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="#route" className="btn-primary py-4 px-8 text-lg rounded-md">
                  Explore the Route
                </a>
                <a href="#" className="bg-transparent hover:bg-white/10 text-white text-lg py-4 px-8 border-2 border-white rounded-md transition duration-300">
                  Sign up for Updates
                </a>
              </div>
              <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Registration Closing Soon</p>
                    <p className="text-gray-300">February 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Registration Form Section - Hidden for now 
        <section id="register" className="mb-24 py-16 bg-dark-blue -mx-4 px-4 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Register Now</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Secure your spot in Prague&apos;s most exciting cycling event
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="max-w-lg mx-auto bg-green-600 bg-opacity-20 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Registration Successful!</h3>
                <p className="text-gray-200">
                  Thank you for registering for the Ronde van Praageren cycling race. We&apos;ll be in touch soon with more details.
                </p>
              </div>
            ) : (
              <div className="max-w-xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-dark-blue text-center">Your Details</h3>
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  // Uncomment and add your Formspree endpoint in production
                  // action="https://formspree.io/f/your-form-id"
                  // method="POST"
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                      Race Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="main">Main Race (110km)</option>
                      <option value="leisure">Leisure Ride (45km)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Any special requirements or questions?"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary w-full py-3 px-6 rounded-md transition-all ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Processing..." : "Submit Registration"}
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                      * Required fields. We&apos;ll never share your information.
                    </p>
                  </div>
                </form>
              </div>
            )}
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
                <a href="#" className="text-white hover:text-yellow-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.668-.07 4.948-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <li><a href="#register" className="text-gray-300 hover:text-yellow-accent">Registration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">info@rondevanpraageren.cz</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+420 123 456 789</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-gray-400">© 2025 Ronde van Praageren. All rights reserved.</p>
            <p className="text-gray-400 mt-2 md:mt-0">
              <a href="#" className="hover:text-yellow-accent">Privacy Policy</a> | 
              <a href="#" className="hover:text-yellow-accent ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
