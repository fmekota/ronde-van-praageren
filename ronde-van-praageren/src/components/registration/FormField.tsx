interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  errors?: string[];
  defaultValue?: string;
  autoComplete?: string;
}

export function FormField({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  errors,
  defaultValue,
  autoComplete,
}: FormFieldProps) {
  const hasError = errors && errors.length > 0;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors ${
          hasError ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />
      {hasError && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {errors[0]}
        </p>
      )}
    </div>
  );
}
