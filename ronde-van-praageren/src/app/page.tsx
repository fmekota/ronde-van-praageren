"use client";

import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would typically handle form submission
    // For now, we'll just alert the user
    alert("Form submitted! In a real implementation, this would send your registration.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            Ronde van Praageren
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#event" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Event</a></li>
              <li><a href="#route" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Route</a></li>
              <li><a href="#register" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Join the Challenge
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the thrill of cycling through scenic routes in our annual race event.
          </p>
        </section>

        {/* Event Details Section */}
        <section id="event" className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Event Details</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Date & Time</h3>
              <p className="text-gray-700 dark:text-gray-300">September 15, 2024</p>
              <p className="text-gray-700 dark:text-gray-300">Starting at 9:00 AM</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">Prague City Center</p>
              <p className="text-gray-700 dark:text-gray-300">Starting Point: Old Town Square</p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Distance</h3>
              <p className="text-gray-700 dark:text-gray-300">60km Main Race</p>
              <p className="text-gray-700 dark:text-gray-300">30km Leisure Ride</p>
            </div>
          </div>
        </section>

        {/* Route Map Section */}
        <section id="route" className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Race Route</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            {/* Replace with your Strava embed code */}
            <div className="bg-gray-200 dark:bg-gray-700 w-full h-96 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Strava map will be embedded here. Please provide your embed link.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="register" className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Register Now</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
            >
              Submit Registration
            </button>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              * Form submissions will be sent via Formspree. Replace the form action with your Formspree endpoint in production.
            </p>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Ronde van Praageren</h2>
              <p className="text-gray-400">The premier cycling event in Prague</p>
            </div>
            <div>
              <p className="text-gray-400">© 2024 Ronde van Praageren. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
