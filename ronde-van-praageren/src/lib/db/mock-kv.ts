// Mock KV store for local development
// Data persists across hot reloads using globalThis

import { Registration } from "@/lib/schemas/registration";
import { REGISTRATION_CONFIG } from "@/config/registration";

// Define global storage type
interface MockStorage {
  store: Map<string, string>;
  registrationsList: Set<string>;
  counter: number;
  startNumberCounter: number;
  tokenExpiry: Map<string, number>;
}

// Use globalThis to persist data across hot reloads in dev mode
const globalKey = "__MOCK_KV_STORAGE__";

function getStorage(): MockStorage {
  if (!(globalThis as Record<string, unknown>)[globalKey]) {
    (globalThis as Record<string, unknown>)[globalKey] = {
      store: new Map<string, string>(),
      registrationsList: new Set<string>(),
      counter: 0,
      startNumberCounter: 0,
      tokenExpiry: new Map<string, number>(),
    };
    console.log("[Mock KV] Initialized new storage");
  }
  return (globalThis as Record<string, unknown>)[globalKey] as MockStorage;
}

// Key prefixes
const KEYS = {
  registration: (id: string) => `registration:${id}`,
  email: (email: string) => `email:${email.toLowerCase()}`,
  token: (token: string) => `token:${token}`,
};

export async function createRegistration(
  registration: Registration,
  verificationToken: string
): Promise<void> {
  const storage = getStorage();

  // Store registration data
  storage.store.set(KEYS.registration(registration.id), JSON.stringify(registration));

  // Map email to registration ID
  storage.store.set(KEYS.email(registration.email), registration.id);

  // Store verification token with expiry
  storage.store.set(KEYS.token(verificationToken), registration.id);
  storage.tokenExpiry.set(
    KEYS.token(verificationToken),
    Date.now() + REGISTRATION_CONFIG.tokenExpiryMs
  );

  // Add to registrations list
  storage.registrationsList.add(registration.id);

  // Increment counter
  storage.counter++;

  console.log(`[Mock KV] Created registration: ${registration.email}`);
  console.log(`[Mock KV] Verification token: ${verificationToken}`);
  console.log(
    `[Mock KV] Verification link: ${process.env.NEXT_PUBLIC_BASE_URL}/api/verify?token=${verificationToken}`
  );
}

export async function isEmailRegistered(email: string): Promise<boolean> {
  const storage = getStorage();
  return storage.store.has(KEYS.email(email.toLowerCase()));
}

export async function getRegistration(id: string): Promise<Registration | null> {
  const storage = getStorage();
  const data = storage.store.get(KEYS.registration(id));
  if (!data) return null;
  return JSON.parse(data);
}

export async function getRegistrationIdByToken(
  token: string
): Promise<string | null> {
  const storage = getStorage();
  const key = KEYS.token(token);
  const expiry = storage.tokenExpiry.get(key);

  // Check if token expired
  if (expiry && Date.now() > expiry) {
    storage.store.delete(key);
    storage.tokenExpiry.delete(key);
    return null;
  }

  return storage.store.get(key) ?? null;
}

export async function verifyRegistration(id: string): Promise<number | null> {
  const storage = getStorage();
  const registration = await getRegistration(id);
  if (!registration) return null;
  if (registration.emailVerified) return registration.startNumber ?? null;

  // Get next start number
  storage.startNumberCounter++;
  const startNumber = storage.startNumberCounter;

  // Update registration
  const updatedRegistration: Registration = {
    ...registration,
    emailVerified: true,
    startNumber,
    verifiedAt: new Date().toISOString(),
  };

  storage.store.set(KEYS.registration(id), JSON.stringify(updatedRegistration));

  console.log(
    `[Mock KV] Verified registration: ${registration.email} -> Start #${startNumber}`
  );

  return startNumber;
}

export async function deleteVerificationToken(token: string): Promise<void> {
  const storage = getStorage();
  const key = KEYS.token(token);
  storage.store.delete(key);
  storage.tokenExpiry.delete(key);
}

export async function getVerifiedRegistrations(): Promise<Registration[]> {
  const storage = getStorage();
  const registrations: Registration[] = [];

  for (const id of storage.registrationsList) {
    const data = storage.store.get(KEYS.registration(id));
    if (data) {
      const registration = JSON.parse(data);
      if (registration.emailVerified) {
        registrations.push(registration);
      }
    }
  }

  return registrations.sort((a, b) => (a.startNumber ?? 0) - (b.startNumber ?? 0));
}

export async function getAllRegistrations(): Promise<Registration[]> {
  const storage = getStorage();
  const registrations: Registration[] = [];

  for (const id of storage.registrationsList) {
    const data = storage.store.get(KEYS.registration(id));
    if (data) {
      registrations.push(JSON.parse(data));
    }
  }

  return registrations.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getRegistrationCount(): Promise<number> {
  const storage = getStorage();
  return storage.counter;
}

export async function getVerifiedCount(): Promise<number> {
  const registrations = await getVerifiedRegistrations();
  return registrations.length;
}

// Update a registration
export async function updateRegistration(
  id: string,
  updates: Partial<Registration>
): Promise<Registration | null> {
  const storage = getStorage();
  const existing = await getRegistration(id);
  if (!existing) return null;

  const updated: Registration = {
    ...existing,
    ...updates,
    id: existing.id, // Prevent ID from being changed
  };

  storage.store.set(KEYS.registration(id), JSON.stringify(updated));

  // Update email mapping if email changed
  if (updates.email && updates.email !== existing.email) {
    storage.store.delete(KEYS.email(existing.email));
    storage.store.set(KEYS.email(updates.email), id);
  }

  console.log(`[Mock KV] Updated registration: ${id}`);
  return updated;
}

// Delete a registration
export async function deleteRegistration(id: string): Promise<boolean> {
  const storage = getStorage();
  const existing = await getRegistration(id);
  if (!existing) return false;

  // Remove from store
  storage.store.delete(KEYS.registration(id));
  storage.store.delete(KEYS.email(existing.email));
  storage.registrationsList.delete(id);

  // Decrement counter
  storage.counter = Math.max(0, storage.counter - 1);

  console.log(`[Mock KV] Deleted registration: ${id} (${existing.email})`);
  return true;
}
