import { Redis } from "@upstash/redis";
import { Registration } from "@/lib/schemas/registration";
import { REGISTRATION_CONFIG } from "@/config/registration";

// Lazy initialize Redis client
let redisInstance: Redis | null = null;

function getRedis(): Redis {
  if (!redisInstance) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;

    if (!url || !token) {
      throw new Error(
        "Missing KV_REST_API_URL or KV_REST_API_TOKEN environment variables"
      );
    }

    redisInstance = new Redis({ url, token });
  }
  return redisInstance;
}

// Key prefixes
const KEYS = {
  registration: (id: string) => `registration:${id}`,
  email: (email: string) => `email:${email.toLowerCase()}`,
  token: (token: string) => `token:${token}`,
  counter: "registration:counter",
  startNumber: "registration:start_number",
  registrationsList: "registrations:list",
};

// Create a new registration
export async function createRegistration(
  registration: Registration,
  verificationToken: string
): Promise<void> {
  const pipeline = getRedis().pipeline();

  // Store registration data
  pipeline.set(KEYS.registration(registration.id), JSON.stringify(registration));

  // Map email to registration ID (for duplicate checking)
  pipeline.set(KEYS.email(registration.email), registration.id);

  // Store verification token with 24h TTL
  const tokenExpirySeconds = REGISTRATION_CONFIG.tokenExpiryMs / 1000;
  pipeline.set(KEYS.token(verificationToken), registration.id, {
    ex: tokenExpirySeconds,
  });

  // Add to registrations list
  pipeline.sadd(KEYS.registrationsList, registration.id);

  // Increment counter
  pipeline.incr(KEYS.counter);

  await pipeline.exec();
}

// Check if email is already registered
export async function isEmailRegistered(email: string): Promise<boolean> {
  const existingId = await getRedis().get<string>(KEYS.email(email.toLowerCase()));
  return existingId !== null;
}

// Get registration by ID
export async function getRegistration(id: string): Promise<Registration | null> {
  const data = await getRedis().get<string>(KEYS.registration(id));
  if (!data) return null;
  return typeof data === "string" ? JSON.parse(data) : data;
}

// Get registration ID by verification token
export async function getRegistrationIdByToken(
  token: string
): Promise<string | null> {
  return getRedis().get<string>(KEYS.token(token));
}

// Verify a registration
export async function verifyRegistration(id: string): Promise<number | null> {
  const registration = await getRegistration(id);
  if (!registration) return null;
  if (registration.emailVerified) return registration.startNumber ?? null;

  // Get next start number
  const startNumber = await getRedis().incr(KEYS.startNumber);

  // Update registration
  const updatedRegistration: Registration = {
    ...registration,
    emailVerified: true,
    startNumber,
    verifiedAt: new Date().toISOString(),
  };

  await getRedis().set(
    KEYS.registration(id),
    JSON.stringify(updatedRegistration)
  );

  return startNumber;
}

// Delete verification token
export async function deleteVerificationToken(token: string): Promise<void> {
  await getRedis().del(KEYS.token(token));
}

// Get all verified registrations (for public startlist)
export async function getVerifiedRegistrations(): Promise<Registration[]> {
  const ids = await getRedis().smembers<string[]>(KEYS.registrationsList);
  if (!ids || ids.length === 0) return [];

  const registrations: Registration[] = [];

  // Fetch all registrations in parallel
  const results = await Promise.all(
    ids.map((id) => getRedis().get<string>(KEYS.registration(id)))
  );

  for (const data of results) {
    if (data) {
      const registration = typeof data === "string" ? JSON.parse(data) : data;
      if (registration.emailVerified) {
        registrations.push(registration);
      }
    }
  }

  // Sort by start number
  return registrations.sort((a, b) => (a.startNumber ?? 0) - (b.startNumber ?? 0));
}

// Get all registrations (for admin)
export async function getAllRegistrations(): Promise<Registration[]> {
  const ids = await getRedis().smembers<string[]>(KEYS.registrationsList);
  if (!ids || ids.length === 0) return [];

  const registrations: Registration[] = [];

  // Fetch all registrations in parallel
  const results = await Promise.all(
    ids.map((id) => getRedis().get<string>(KEYS.registration(id)))
  );

  for (const data of results) {
    if (data) {
      const registration = typeof data === "string" ? JSON.parse(data) : data;
      registrations.push(registration);
    }
  }

  // Sort by creation date (newest first)
  return registrations.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

// Get registration count
export async function getRegistrationCount(): Promise<number> {
  const count = await getRedis().get<number>(KEYS.counter);
  return count ?? 0;
}

// Get verified registration count
export async function getVerifiedCount(): Promise<number> {
  const registrations = await getVerifiedRegistrations();
  return registrations.length;
}

// Update a registration
export async function updateRegistration(
  id: string,
  updates: Partial<Registration>
): Promise<Registration | null> {
  const existing = await getRegistration(id);
  if (!existing) return null;

  const updated: Registration = {
    ...existing,
    ...updates,
    id: existing.id, // Prevent ID from being changed
  };

  const pipeline = getRedis().pipeline();

  // Update registration data
  pipeline.set(KEYS.registration(id), JSON.stringify(updated));

  // Update email mapping if email changed
  if (updates.email && updates.email.toLowerCase() !== existing.email.toLowerCase()) {
    pipeline.del(KEYS.email(existing.email));
    pipeline.set(KEYS.email(updates.email.toLowerCase()), id);
  }

  await pipeline.exec();
  return updated;
}

// Delete a registration
export async function deleteRegistration(id: string): Promise<boolean> {
  const existing = await getRegistration(id);
  if (!existing) return false;

  const pipeline = getRedis().pipeline();

  // Remove registration data
  pipeline.del(KEYS.registration(id));
  pipeline.del(KEYS.email(existing.email));
  pipeline.srem(KEYS.registrationsList, id);
  pipeline.decr(KEYS.counter);

  await pipeline.exec();
  return true;
}
