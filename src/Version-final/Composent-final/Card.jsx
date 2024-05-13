import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex justify-center mr-8 mt-10">
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 rounded-lg mb-2 mr-5"
        />
        <div>
          <h2 className="text-lg text-black font-bold mb-1">{title}</h2>
          <p className="text-sm font-medium text-gray-600 font-roboto w-60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
