import React, { useState } from "react";

const QAResponse = ({question, reponse}) => {

  const[afficherReponse, setAfficherReponse] = useState(false);

  const affRep = () => {
    setAfficherReponse(!afficherReponse);
  }

  return (
    <div className="flex border bg-white rounded-xl py-4 w-full h-full max-w-lg cursor-pointer relative" onClick={affRep}>
      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="mb-1 text-lg font-medium text-gray-500">{question}</h1>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {afficherReponse && (
          <div className="mt-4">
            <div className="border-t max-w-full border-gray-200"></div>
            <p className="mt-4">{reponse}</p>
          </div>
        )}
      </div>
    </div>
  );
  
  
}

export default QAResponse; 
