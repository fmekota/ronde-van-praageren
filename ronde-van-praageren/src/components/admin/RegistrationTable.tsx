"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Registration } from "@/lib/schemas/registration";

interface RegistrationTableProps {
  registrations: Registration[];
}

export function RegistrationTable({ registrations: initialRegistrations }: RegistrationTableProps) {
  const router = useRouter();
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Registration>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (registration: Registration) => {
    setEditingId(registration.id);
    setEditForm({
      firstName: registration.firstName,
      lastName: registration.lastName,
      email: registration.email,
      club: registration.club || "",
      stravaProfile: registration.stravaProfile || "",
      emergencyName: registration.emergencyName,
      emergencyPhone: registration.emergencyPhone,
      startNumber: registration.startNumber,
      emailVerified: registration.emailVerified,
    });
    setError(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
    setError(null);
  };

  const handleSave = async (id: string) => {
    setLoading(id);
    setError(null);

    try {
      const response = await fetch(`/api/admin/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        throw new Error("Failed to update registration");
      }

      const updated = await response.json();
      setRegistrations((prev) =>
        prev.map((r) => (r.id === id ? updated : r))
      );
      setEditingId(null);
      setEditForm({});
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setLoading(null);
    }
  };

  const handleDelete = async (id: string, email: string) => {
    if (!confirm(`Are you sure you want to delete ${email}?`)) {
      return;
    }

    setLoading(id);
    setError(null);

    try {
      const response = await fetch(`/api/admin/registrations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete registration");
      }

      setRegistrations((prev) => prev.filter((r) => r.id !== id));
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    } finally {
      setLoading(null);
    }
  };

  if (registrations.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <p className="text-gray-500">No registrations yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {error && (
        <div className="p-4 bg-red-50 border-b border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                #
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Email
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Club
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Emergency
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Status
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {registrations.map((registration) => (
              <tr key={registration.id} className="hover:bg-gray-50">
                {editingId === registration.id ? (
                  // Edit mode
                  <>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        value={editForm.startNumber ?? ""}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            startNumber: e.target.value ? parseInt(e.target.value) : undefined,
                          }))
                        }
                        className="w-16 px-2 py-1 border rounded text-sm"
                        placeholder="#"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        <input
                          type="text"
                          value={editForm.firstName ?? ""}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, firstName: e.target.value }))
                          }
                          className="w-24 px-2 py-1 border rounded text-sm"
                          placeholder="First"
                        />
                        <input
                          type="text"
                          value={editForm.lastName ?? ""}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, lastName: e.target.value }))
                          }
                          className="w-24 px-2 py-1 border rounded text-sm"
                          placeholder="Last"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="email"
                        value={editForm.email ?? ""}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-48 px-2 py-1 border rounded text-sm"
                        placeholder="Email"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="text"
                        value={editForm.club ?? ""}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, club: e.target.value }))
                        }
                        className="w-32 px-2 py-1 border rounded text-sm"
                        placeholder="Club"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          value={editForm.emergencyName ?? ""}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, emergencyName: e.target.value }))
                          }
                          className="w-32 px-2 py-1 border rounded text-sm"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={editForm.emergencyPhone ?? ""}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, emergencyPhone: e.target.value }))
                          }
                          className="w-32 px-2 py-1 border rounded text-sm"
                          placeholder="Phone"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={editForm.emailVerified ?? false}
                          onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, emailVerified: e.target.checked }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-sm">Verified</span>
                      </label>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSave(registration.id)}
                          disabled={loading === registration.id}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 disabled:opacity-50"
                        >
                          {loading === registration.id ? "..." : "Save"}
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  // View mode
                  <>
                    <td className="py-3 px-4">
                      {registration.startNumber ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary font-bold rounded-full text-sm">
                          {registration.startNumber}
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">
                        {registration.firstName} {registration.lastName}
                      </div>
                      {registration.stravaProfile && (
                        <a
                          href={registration.stravaProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-orange-500 hover:underline"
                        >
                          Strava
                        </a>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">
                      {registration.email}
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">
                      {registration.club || "—"}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <div className="text-gray-900">{registration.emergencyName}</div>
                      <div className="text-gray-500">{registration.emergencyPhone}</div>
                    </td>
                    <td className="py-3 px-4">
                      {registration.emailVerified ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(registration)}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded hover:bg-blue-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(registration.id, registration.email)}
                          disabled={loading === registration.id}
                          className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded hover:bg-red-200 disabled:opacity-50"
                        >
                          {loading === registration.id ? "..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
