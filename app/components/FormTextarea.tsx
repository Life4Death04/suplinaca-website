interface FormTextareaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  variant?: 'light' | 'dark';
}

export default function FormTextarea({ 
  label, 
  id, 
  name, 
  placeholder,
  rows = 4,
  required = false,
  variant = 'light'
}: FormTextareaProps) {
  const textareaClasses = variant === 'light'
    ? "w-full px-4 py-3 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none placeholder-gray-400" 
    : "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none bg-gray-200 placeholder-gray-500";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder || label}
        required={required}
        className={textareaClasses}
      />
    </div>
  );
}
