import React from 'react';

function InputField({ id, label, type, autoComplete, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-gray-500">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
        className="mt-2 appearance-none rounded-2xl relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
}

export default InputField;
