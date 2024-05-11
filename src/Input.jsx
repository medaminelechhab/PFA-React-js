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
  type_input = "input", // Définition par défaut du type d'entrée
  h,
}) => {
  const InputComponent = type_input; // Récupération du type d'input dynamique

  return (
    <div>
      {label ? (
        <label htmlFor={id} className={desgine_label}>
          {label}
        </label>
      ) : (
        <label htmlFor={id} className={desgine_label}>
          <div className=" h-6"></div>
        </label>
      )}

      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`appearance-none rounded-lg relative block w-full ${
          h ? `h-56` : ""
        } mt-${label_spaceinput} px-3 py-2 border-2 border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-400 focus:border-gray-400 focus:z-10 sm:text-sm`}
      />
    </div>
  );
};

export default Input;
