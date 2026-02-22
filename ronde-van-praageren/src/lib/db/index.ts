// Database module that switches between real and mock implementations
// Set USE_MOCK_DB=true in .env.local for local development without Redis

import type { Registration } from "@/lib/schemas/registration";

// Check if we should use mock
const useMock =
  process.env.USE_MOCK_DB === "true" ||
  (!process.env.KV_REST_API_URL && !process.env.KV_REST_API_TOKEN);

// Dynamically import the appropriate implementation
async function getImpl() {
  if (useMock) {
    console.log("[DB] Using mock database");
    return import("./mock-kv");
  }
  return import("./kv");
}

export async function createRegistration(
  registration: Registration,
  verificationToken: string
): Promise<void> {
  const impl = await getImpl();
  return impl.createRegistration(registration, verificationToken);
}

export async function isEmailRegistered(email: string): Promise<boolean> {
  const impl = await getImpl();
  return impl.isEmailRegistered(email);
}

export async function getRegistration(id: string): Promise<Registration | null> {
  const impl = await getImpl();
  return impl.getRegistration(id);
}

export async function getRegistrationIdByToken(
  token: string
): Promise<string | null> {
  const impl = await getImpl();
  return impl.getRegistrationIdByToken(token);
}

export async function verifyRegistration(id: string): Promise<number | null> {
  const impl = await getImpl();
  return impl.verifyRegistration(id);
}

export async function deleteVerificationToken(token: string): Promise<void> {
  const impl = await getImpl();
  return impl.deleteVerificationToken(token);
}

export async function getVerifiedRegistrations(): Promise<Registration[]> {
  const impl = await getImpl();
  return impl.getVerifiedRegistrations();
}

export async function getAllRegistrations(): Promise<Registration[]> {
  const impl = await getImpl();
  return impl.getAllRegistrations();
}

export async function getRegistrationCount(): Promise<number> {
  const impl = await getImpl();
  return impl.getRegistrationCount();
}

export async function getVerifiedCount(): Promise<number> {
  const impl = await getImpl();
  return impl.getVerifiedCount();
}

export async function updateRegistration(
  id: string,
  updates: Partial<Registration>
): Promise<Registration | null> {
  const impl = await getImpl();
  return impl.updateRegistration(id, updates);
}

export async function deleteRegistration(id: string): Promise<boolean> {
  const impl = await getImpl();
  return impl.deleteRegistration(id);
}
