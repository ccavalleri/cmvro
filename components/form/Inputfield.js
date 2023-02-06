import { useState } from "react";
export default function Inputfield({
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
}) {

  const [showError,setShowError]=useState(false);
  const handleShowError=(e) => {
    setShowError(true);
  }

  return (
    <div className="ml-2 mt-1">
      <label className="block text-gray-700 text-xl font-bold">{label}</label>
      <input
        className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

      <p className="text-red-500 text-xs mt-1 ml-2 hidden">{errorMessage}</p>
    </div>
  );
}
