import { useState } from 'react';
import { AdjustmentsIcon } from '@heroicons/react/outline';

export default function InputfieldIcon({
  name,
  label,
  errorMessage,
  type,
  placeholder,
  maxlength,
  required,
  pattern,
  onChange,
  onBlur,
  icon,
}) {
  const [showError, setShowError] = useState(false);
  const handleShowError = (e) => {
    setShowError(true);
  };

  return (
    <div className="ml-2 mt-1">
      <label className="block text-gray-700 xl:text-xl md:text-sm font-bold">
        {label}
      </label>
      <div class="relative mb-3">
        <div class="absolute inset-y-0 right-1 mr-3 cursor-pointer flex items-center pl-3">
          {icon}
        </div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxlength}
          pattern={pattern}
          onBlur={handleShowError}
          required
          focused={showError.toString()}
        />
      </div>
      <p className="text-red-500 text-xs mt-1 ml-2 hidden">{errorMessage}</p>
    </div>
  );
}
