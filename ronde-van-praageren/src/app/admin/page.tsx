import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { EVENT_CONFIG } from "@/config/event";
import { getAllRegistrations } from "@/lib/db";
import { REGISTRATION_CONFIG } from "@/config/registration";
import { RegistrationTable } from "@/components/admin/RegistrationTable";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin_auth");
  return authCookie?.value === process.env.ADMIN_SECRET;
}

export default async function AdminPage() {
  // Check authentication
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  let registrations: Awaited<ReturnType<typeof getAllRegistrations>> = [];
  try {
    registrations = await getAllRegistrations();
  } catch {
    // KV not configured
  }
  const verifiedCount = registrations.filter((r) => r.emailVerified).length;
  const pendingCount = registrations.length - verifiedCount;

  // Generate CSV data
  const csvHeaders = [
    "Start #",
    "First Name",
    "Last Name",
    "Email",
    "Club",
    "Strava",
    "Emergency Name",
    "Emergency Phone",
    "Verified",
    "Registered At",
  ];
  const csvRows = registrations.map((r) => [
    r.startNumber ?? "",
    r.firstName,
    r.lastName,
    r.email,
    r.club ?? "",
    r.stravaProfile ?? "",
    r.emergencyName,
    r.emergencyPhone,
    r.emailVerified ? "Yes" : "No",
    r.createdAt,
  ]);
  const csvContent = [csvHeaders, ...csvRows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const csvDataUrl = `data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-primary">
              {EVENT_CONFIG.name}
            </Link>
            <span className="text-sm text-gray-500">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/startlist"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              View Startlist
            </Link>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Registration Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500 mb-1">Total Registrations</p>
            <p className="text-3xl font-bold text-gray-900">
              {registrations.length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500 mb-1">Verified</p>
            <p className="text-3xl font-bold text-green-600">{verifiedCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500 mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-sm text-gray-500 mb-1">Spots Remaining</p>
            <p className="text-3xl font-bold text-primary">
              {REGISTRATION_CONFIG.maxParticipants - verifiedCount}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            All Registrations
          </h2>
          <div className="flex gap-3">
            <Link
              href="/register"
              className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              + Add Registration
            </Link>
            <a
              href={csvDataUrl}
              download={`registrations-${new Date().toISOString().split("T")[0]}.csv`}
              className="bg-primary text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Export CSV
            </a>
          </div>
        </div>

        {/* Registrations Table */}
        <RegistrationTable registrations={registrations} />
      </main>
    </div>
  );
}
