// Event configuration - centralized constants for Ronde van Praageren

export const EVENT_CONFIG = {
  // Event details
  name: "Ronde van Praageren",
  tagline: "5th Annual Prague Cobbled Classic",
  year: 2025,
  date: "March 29, 2025",
  startTime: "10:00 AM",
  registrationDeadline: "March 28, 2025",

  // Race details
  distance: "110km",
  elevationGain: "1400 meters",
  terrain: 'Road, "Some" COBBLES',
  difficulty: "Epic",
  maxRiders: 800,

  // Location
  location: {
    city: "Prague City Center",
    startingPoint: "Výstaviště",
    coordinates: {
      lat: 50.1,
      lon: 14.467,
    },
  },

  // URLs
  urls: {
    stravaRegistration: "https://www.strava.com/clubs/1048077/group_events/1899385",
    stravaRouteId: "3199162964264401098",
    instagram: "https://www.instagram.com/cc_currywurst?igsh=Y2EzbXNvY3VuMjcy",
    directorsPdf: "/24_Ronde van Praageren_Úvodní slovo ředitele závodu.pdf",
  },

  // Contact
  contact: {
    email: "info@rondevanpraageren.cz",
    phone: "+420 721 857 781",
  },

  // Race Director
  raceDirector: {
    name: 'Janek "Pedersen" Lžičař',
    title: "Race Director, Ronde van Praageren",
    image: "/race_director.png",
  },

  // Famous segments
  segments: [
    {
      name: "Bustehradberg",
      length: "420m",
      grade: "6%",
      image: "/bustehradberg.png",
    },
    {
      name: "Oude Wittemont",
      length: "1080m",
      grade: "4,2%",
      image: "/oude-wittemont.png",
    },
    {
      name: "Lumiirstraat",
      length: "375m",
      grade: "10%",
      image: "/lumiirstraat.png",
    },
    {
      name: "Praagse Burchtberg",
      length: "990m",
      grade: "7,8%",
      image: "/praagse-burchberg.png",
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Fakt sorry, ale na nějaký kostky vám zase seru. Nebudu tu",
      name: "Veronika Přikrylová",
      role: "Femme fatale pražské cyklistické komunity",
      image: "/verca.png",
      colorClass: "bg-primary",
    },
    {
      quote: "Hele, carboloadovat coca-colou mi nepřijde úplně správný. Co říká Johnny Kraus není pravda, vůbec jsem nevěděl, že to tehdy byl závod.",
      name: "Petr Vakoč",
      role: "Bývalý silniční profesionál a současná gravelová superstar",
      image: "/vakoc.png",
      colorClass: "bg-yellow-accent",
    },
    {
      quote: "Pro mě je to vrchol sezony, připravuju se na to celej rok. Jediná věc, se kterou si zatím nevim rady, je Jankův spurt.",
      name: "Filip Měkota",
      role: "Pražský sportovní univerzál, dobře aproximovatelný koulí",
      image: "/mekejs.png",
      colorClass: "bg-accent",
    },
    {
      quote: "Hlavně doufám, že Janek zase nezlomí svoje kolo. Napiš tam, že můj největší úspěch je, že jsem Petra Vakoče porazil v časovce do vrchu",
      name: "Jan Kraus",
      role: "Cyklistický dráhový internacionál",
      image: "/kraus.png",
      colorClass: "bg-dark-blue",
    },
    {
      quote: "Budete to mít hezký :)",
      name: "Martin Práger",
      role: "Marketingový expert a cyklistický teoretik",
      image: "/prager.png",
      colorClass: "bg-olive-600",
    },
    {
      quote: "Baf. Mám klobny, mám grilovací sýr, ale už jsem na budgetu. Mám vzít promítačku?",
      name: "Adam Burjan",
      role: "Internacionální propagátor bikepackingu a bezpražcové železniční dopravy",
      image: "/burjada.png",
      colorClass: "bg-brown-700",
    },
  ],

  // Schedule
  schedule: [
    {
      id: 1,
      title: "Rider Briefing",
      time: "9:30 AM - 9:45 AM",
      description: "Important safety information and course details will be provided.",
    },
    {
      id: 2,
      title: "Race Start",
      time: "10:00 AM",
      description: "The 110km Main Race begins",
    },
    {
      id: 3,
      title: "Coffee Break",
      time: "Approximately 12:00 PM",
      description: "Coffee, tea, and snacks will be available.",
    },
    {
      id: 4,
      title: "First Riders Finish",
      time: "Approximately 3:30 PM",
      description: "Elite riders are expected to complete the course in around 5.5 hours.",
    },
    {
      id: 5,
      title: "Awards Ceremony",
      time: "TBD",
      description: "Celebration and recognition of top finishers in various categories.",
    },
  ],

  // Sponsors
  sponsors: {
    main: [
      {
        name: "CC Currywurst",
        image: "/sponsors/ccc.png",
        description: "Organizing club and main supporter, providing event logistics and community engagement since 2020.",
        color: "dark-blue",
      },
      {
        name: "UCI",
        image: "/sponsors/uci.png",
        description: "Supporting local cycling infrastructure and development of cycling culture across the globe.",
        color: "accent",
      },
      {
        name: "Mapei",
        image: "/sponsors/mapei.png",
        description: "Co to bylo mapei? Esence toho že silnička by měla být italská!",
        color: "yellow-accent",
      },
    ],
    notes: [
      {
        sponsor: "CCC",
        note: "We're proud to support the Ronde van Praageren and its celebration of cycling culture in Prague. The event captures the essence of Flemish classics right in the heart of Central Europe.",
        color: "primary",
      },
      {
        sponsor: "UCI",
        note: "The challenge of the cobbles, the spirit of the riders, and the passion of the crowd make Ronde van Praageren a unique event that we're honored to be a part of. Looking forward to the 2025 edition!",
        color: "accent",
      },
      {
        sponsor: "Mapei",
        note: "As cycling enthusiasts ourselves, we understand the dedication it takes to conquer routes like the Praagse Burchberg and Muur Van Wijngaarden. We're excited to help bring this amazing event to life.",
        color: "yellow-accent",
      },
    ],
  },
} as const;

export type EventConfig = typeof EVENT_CONFIG;
export type Segment = (typeof EVENT_CONFIG.segments)[number];
export type Testimonial = (typeof EVENT_CONFIG.testimonials)[number];
export type ScheduleItem = (typeof EVENT_CONFIG.schedule)[number];
