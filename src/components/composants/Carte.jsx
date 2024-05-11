import React from "react";


const Carte = ({imgSrc, title, description}) => {
    return(
        <div className="flex flex-col items-center mr-16">
            <img src={imgSrc} alt="" className="w-15 h-16 mb-2"/>
            <h2 className="text-2xl font-bold text-gray-600 mb-2.5">{title}</h2>
            <p className="w-80 text-sm font-normal text-gray-700">{description}</p>
        </div>
    );
};

export default Carte;