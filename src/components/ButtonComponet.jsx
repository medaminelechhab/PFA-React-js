// ButtonComponent.jsx
import React from "react";

const ButtonComponent = ({ content }) => {
    return (
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-20 rounded-full">
            {content}
        </button>
    );
};

export default ButtonComponent;
