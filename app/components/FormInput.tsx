interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  variant?: 'light' | 'dark';
}

export default function FormInput({ 
  label, 
  id, 
  name, 
  type = 'text', 
  placeholder,
  required = false,
  variant = 'light'
}: FormInputProps) {
  const inputClasses = variant === 'light'
    ? "w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
    : "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-200 placeholder-gray-500";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder || label}
        required={required}
        className={inputClasses}
      />
    </div>
  );
}
