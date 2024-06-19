import React from "react";

const Carte = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center mr-16">
      <img src={imgSrc} alt="" className=" size-12 mb-1" />
      <h2 className="text-sm font-bold text-gray-600 mb-2">{title}</h2>
      <p className="w-80 text-xs font-normal text-gray-700 text-justify">
        {description}
      </p>
    </div>
  );
};

export default Carte;
