import React, { useContext } from "react";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
export default function CardPircing({
  type,
  price,
  oldprice,
  color,
  A,
  B,
  C,
  onTypeSelect,
  isSelected,
}) {
  const { services, Setservices } = useContext(ProfileContext);
  const handleClick = () => {
    Setservices(type);
  };

  return (
    <div
      className={`ring-1 w-72 ring-gray-200 border-dashed border-[3px] border-green-700 rounded-3xl p-8 xl:p-10 ${
        isSelected ? "bg-gray-200 shadow-2xl " : ""
      }`}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          id="tier-standard"
          className="text-gray-900 text-2xl font-semibold leading-8"
        >
          {type}
        </h3>
      </div>

      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="line-through text-2xl font-sans text-gray-500/70">
          ${oldprice}
        </span>
        <span className="text-5xl font-bold tracking-tight text-gray-900">
          ${price}
        </span>
      </p>

      <div>
        <button
          onClick={handleClick}
          aria-describedby="tier-standard"
          className={`${
            color
              ? "bg-green-500 shadow-2xl text-black hover:bg-white"
              : "text-blue-600"
          } ring-1 ring-inset ring-blue-200 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
          target="_blank"
        >
          Buy now
        </button>
      </div>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
      >
        <li className="flex gap-x-3 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {A}
        </li>
        <li className="flex gap-x-3 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {B}
        </li>
        <li className="flex gap-x-3 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-5 flex-none text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {C}
        </li>
      </ul>
    </div>
  );
}
