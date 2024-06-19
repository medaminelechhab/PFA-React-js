import React from "react";

const Input = ({
  label,
  id,
  name,
  type,
  required,
  placeholder,
  desgine_label,
  label_spaceinput,
  type_input = "input", // Default input type
  children,
  h,
  value, // Added value prop
  onChange, // Added onChange prop
  w,
}) => {
  const InputComponent = type_input; // Dynamic input type

  return (
    <div>
      {label ? (
        <label htmlFor={id} className={desgine_label}>
          {label}
        </label>
      ) : (
        <label htmlFor={id} className={desgine_label}>
          <div className="h-6"></div>
        </label>
      )}

      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value} // Utilisation de l'ID comme clé de l'objet JSON
        onChange={onChange} // Handling change
        className={`appearance-none rounded-lg cursor-pointer relative block w-full ${h ? `h-56` : ""
          } mt-${label_spaceinput} px-3 py-2 border-2   ${w ? "" : `pb-44`
          }pb-44 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm`}
      >
        {type_input === "select" ? children : null}
      </InputComponent>
    </div>
  );
};

export default Input;
