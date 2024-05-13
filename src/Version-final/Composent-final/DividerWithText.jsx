import React from "react";

function DividerWithText({ text, font }) {
  return (
    <div className="flex items-center justify-center">
      <div className="border-b border-gray-300 w-full"></div>
      <div className={`mx-4 text-gray-600 font-medium ${font}`}>{text}</div>
      <div className="border-b border-gray-300 w-full"></div>
    </div>
  );
}

export default DividerWithText;
