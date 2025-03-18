"use client";

import { useEffect } from "react";
import Image from "next/image";
import React from 'react';

export default function Home() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header - Updated with gradient background and new design */}
      <header className="header-gradient text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="w-16 h-16 relative">
                <div className="absolute w-full h-full bg-yellow-accent rounded-sm transform rotate-6"></div>
                <div className="absolute w-8 h-8 bg-primary rounded-sm top-1 left-4"></div>
                <div className="absolute w-6 h-6 bg-accent rounded-sm bottom-2 right-1"></div>
                <div className="absolute w-4 h-4 bg-dark-blue rounded-sm bottom-3 left-2"></div>
                <div className="absolute w-4 h-4 bg-black rounded-sm top-3 right-3"></div>
                <div className="absolute w-3 h-3 bg-gray-400 rounded-sm top-6 left-5"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase leading-tight">
                RONDE VAN<br />PRAAGEREN
              </h1>
              <p className="text-xs text-gray-300">by CC Currywurst</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#event" className="text-white hover:text-yellow-accent transition-colors uppercase text-sm font-medium font-heading">Event</a></li>
              <li><a href="#route" className="text-white hover:text-yellow-accent transition-colors uppercase text-sm font-medium font-heading">Route</a></li>
              <li><a href="#schedule" className="text-white hover:text-yellow-accent transition-colors uppercase text-sm font-medium font-heading">Schedule</a></li>
              <li><a href="#register" className="text-white hover:text-yellow-accent transition-colors uppercase text-sm font-medium font-heading">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section - Updated with cobblestone theme */}
      <section className="hero-section relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <h2 className="text-6xl font-bold mb-4 leading-tight uppercase tracking-wider">The Belgian <span className="text-yellow-accent">Cobblestone</span> Experience</h2>
            <p className="text-xl mb-8 max-w-2xl">Join us for a true Belgian classic experience on the challenging cobblestone sectors of Prague. A 140km journey through history.</p>
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="bg-black/60 p-4 rounded-sm">
                <span className="block text-gray-300 uppercase text-sm mb-1">Race Date</span>
                <span className="text-xl font-bold">August 12, 2023</span>
              </div>
              <div className="bg-black/60 p-4 rounded-sm">
                <span className="block text-gray-300 uppercase text-sm mb-1">Location</span>
                <span className="text-xl font-bold">Prague, Czech Republic</span>
              </div>
              <div className="bg-black/60 p-4 rounded-sm">
                <span className="block text-gray-300 uppercase text-sm mb-1">Distance</span>
                <span className="text-xl font-bold">140 km</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#register" className="bg-yellow-accent text-black font-bold py-3 px-8 rounded-sm hover:bg-yellow-500 transition-colors uppercase tracking-wider font-heading">Register Now</a>
              <a href="#" className="border border-white py-3 px-8 rounded-sm hover:bg-white hover:text-black transition-colors uppercase tracking-wider font-medium font-heading">Download Brochure</a>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-widest">
            <span className="border-b-4 border-primary pb-2">The Fast Facts</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ronde History Card */}
            <div className="bg-white p-8 shadow-md rounded-sm card-hover">
              <h3 className="text-2xl font-bold mb-4 uppercase text-gray-800">Ronde History</h3>
              <p className="text-gray-700 mb-6">
                Inspired by the Tour of Flanders, our event brings the Belgian classic experience to Prague's cobblestone sectors.
                Now in its 4th year, the race has grown from 50 to over 300 participants.
              </p>
              <a href="#history" className="text-primary font-medium hover:underline font-heading">Read more →</a>
            </div>
            
            {/* Race Format Card */}
            <div className="bg-white p-8 shadow-md rounded-sm card-hover">
              <h3 className="text-2xl font-bold mb-4 uppercase text-gray-800">Race Format</h3>
              <p className="text-gray-700 mb-6">
                A challenging 140km route featuring 12 cobblestone sectors totaling 20km.
                Categories for men, women, and masters with prizes for each division.
              </p>
              <a href="#format" className="text-primary font-medium hover:underline font-heading">View details →</a>
            </div>
            
            {/* Support Card */}
            <div className="bg-white p-8 shadow-md rounded-sm card-hover">
              <h3 className="text-2xl font-bold mb-4 uppercase text-gray-800">Support</h3>
              <p className="text-gray-700 mb-6">
                Full mechanical support, feed zones every 30km, and medical teams throughout the course.
                Post-race beer and Belgian waffles for all finishers.
              </p>
              <a href="#support" className="text-primary font-medium hover:underline font-heading">Learn more →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strava Embed Section */}
      <section className="py-16 bg-gray-50" id="strava-section">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-olive-500 uppercase tracking-widest">
                <span className="border-b-4 border-olive-500 pb-2">Follow The Race</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Track the event live on Strava and join our community for updates, training tips, and to connect with fellow riders. 
                Follow our club and join group rides to prepare for the challenge ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="https://www.strava.com/clubs/123456" target="_blank" rel="noopener noreferrer" 
                  className="bg-orange-500 text-white py-3 px-6 rounded-sm inline-flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors font-heading">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0 5 13.828h4.172"/>
                  </svg>
                  Join on Strava
                </a>
                <a href="https://www.instagram.com/rondevanpraageren" target="_blank" rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-3 px-6 rounded-sm inline-flex items-center justify-center gap-2 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-colors font-heading">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
            <div className="h-96 bg-white shadow-md p-4 rounded-sm">
              {/* Strava Embed */}
              <div className="strava-embed-placeholder w-full h-full flex items-center justify-center bg-gray-100 rounded">
                <p className="text-gray-500 text-center">Strava embed will appear here.<br/>
                   <span className="text-sm">Renders dynamically when JavaScript loads</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 