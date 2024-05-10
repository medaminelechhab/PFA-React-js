import React from 'react';

const Input = ({ label, id, name, type, autoComplete, required, value, onChange, placeholder, children }) => {
    return (
      <div>
        <label htmlFor={id} className='text-base font-medium font-roboto'>{label}</label>
        {type === 'select' ? (
          <select
            id={id}
            name={name}
            autoComplete={autoComplete}
            required={required}
            className="appearance-none rounded-lg relative block w-full mt-1 px-3 py-2 border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm"
            value={value}
            onChange={onChange}
          >
            {children}
          </select>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            required={required}
            className="appearance-none rounded-lg relative block w-full mt-1 px-3 py-2 border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm"
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    );
  };
  

export default Input;

