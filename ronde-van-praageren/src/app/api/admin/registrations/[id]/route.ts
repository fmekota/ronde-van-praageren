import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteRegistration, updateRegistration, getRegistration } from "@/lib/db";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_auth");
  return authCookie?.value === process.env.ADMIN_SECRET;
}

// GET - Get single registration
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const registration = await getRegistration(id);

  if (!registration) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(registration);
}

// PATCH - Update registration
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const updates = await request.json();

    // Don't allow changing certain fields
    delete updates.id;
    delete updates.createdAt;

    const updated = await updateRegistration(id, updates);

    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// DELETE - Delete registration
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteRegistration(id);

  if (!success) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
