import React from 'react';

function CustomButton({ text, bgColor, hoverBgColor, textColor, fontSize, onClick }) {
  return (
    <button
      className={`text-white ${bgColor} hover:${hoverBgColor} focus:outline-none font-medium rounded-full text-base px-6 py-3 font-roboto`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
