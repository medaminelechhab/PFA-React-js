import React, { useContext } from "react";
const RadioCard = ({ titre, images, value, onClick, selected }) => {
  const handlclick = () => {
    onClick(value);
  };
  return (
    <div className="space-y-8" onClick={handlclick}>
      <div
        className={`shadow-xl w-72 rounded-2xl h-48 border-2 ${
          selected ? "border-green-600" : ""
        } hover:border-green-600 flex flex-col items-start px-5 pt-5 `}
      >
        <div className="justify-end flex items-end">
          {" "}
          {/* Ajustement de la classe flex */}
          <div className="ml-56">
            {selected ? (
              <div className="border-2 rounded-full bg-green-600 size-7 relative">
                <div className="border-2 rounded-full bg-white size-4 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="border-2 rounded-full bg-green-600 size-3 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ) : (
              <div className="border-2 rounded-full bg-white size-7 relative">
                <div className="border-2 rounded-full bg-white size-4 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="border-2 rounded-full bg-white size-3 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            )}
          </div>
        </div>
        <div className="size-9">
          <img src={images} alt="" />
        </div>
        <div className="text-2xl pt-5 font-serif">{titre} </div>
      </div>
    </div>
  );
};

export default RadioCard;
