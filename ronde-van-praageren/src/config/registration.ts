// Registration configuration
export const REGISTRATION_CONFIG = {
  // Maximum number of participants
  maxParticipants: 800,

  // Registration open/close dates
  // Note: Set these to past/future dates to control registration window
  // For local dev, registration is always open when dates span the current date
  registrationOpens: "2024-01-01T00:00:00Z",
  registrationCloses: "2026-06-14T23:59:59Z",

  // Verification token expiry (24 hours in milliseconds)
  tokenExpiryMs: 24 * 60 * 60 * 1000,

  // Rate limiting
  rateLimits: {
    registrationsPerIp: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
  },

  // Email settings
  email: {
    from: "Ronde van Praageren <noreply@rondevanpraageren.com>",
    replyTo: "info@rondevanpraageren.com",
  },
} as const;

export type RegistrationConfig = typeof REGISTRATION_CONFIG;
