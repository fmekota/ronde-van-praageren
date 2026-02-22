"use client";

import { useActionState } from "react";
import { submitRegistration } from "@/lib/actions/registration";
import { RegistrationFormState } from "@/lib/schemas/registration";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";

const initialState: RegistrationFormState = {
  success: false,
  message: "",
};

export function RegistrationForm() {
  const [state, formAction] = useActionState(submitRegistration, initialState);

  if (state.success) {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-xl border border-green-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">
          Check Your Email!
        </h2>
        <p className="text-green-700">{state.message}</p>
        <p className="text-green-600 text-sm mt-4">
          The verification link will expire in 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {state.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          name="firstName"
          label="First Name"
          placeholder="Jan"
          required
          errors={state.errors?.firstName}
          autoComplete="given-name"
        />
        <FormField
          name="lastName"
          label="Last Name"
          placeholder="Novák"
          required
          errors={state.errors?.lastName}
          autoComplete="family-name"
        />
      </div>

      <FormField
        name="email"
        label="Email Address"
        type="email"
        placeholder="jan.novak@example.com"
        required
        errors={state.errors?.email}
        autoComplete="email"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          name="club"
          label="Club / Team"
          placeholder="e.g., Prague Cycling Club"
          errors={state.errors?.club}
        />
        <FormField
          name="stravaProfile"
          label="Strava Profile URL"
          type="url"
          placeholder="https://www.strava.com/athletes/12345"
          errors={state.errors?.stravaProfile}
        />
      </div>

      <div className="border-t pt-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            name="emergencyName"
            label="Contact Name"
            placeholder="Full name"
            required
            errors={state.errors?.emergencyName}
          />
          <FormField
            name="emergencyPhone"
            label="Contact Phone"
            type="tel"
            placeholder="+420 123 456 789"
            required
            errors={state.errors?.emergencyPhone}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="border-t pt-6 mt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="acceptsTerms"
            value="true"
            className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            required
          />
          <span className="text-sm text-gray-700">
            I accept the{" "}
            <a
              href="/terms"
              target="_blank"
              className="text-primary hover:underline"
            >
              terms and conditions
            </a>{" "}
            and confirm that I am physically fit to participate in this cycling
            event. I understand that cycling involves inherent risks and I
            participate at my own responsibility.
            <span className="text-red-500 ml-1">*</span>
          </span>
        </label>
        {state.errors?.acceptsTerms && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.acceptsTerms[0]}
          </p>
        )}
      </div>

      {/* Honeypot field - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <SubmitButton
        label="Register for the Event"
        loadingLabel="Submitting Registration..."
      />
    </form>
  );
}
