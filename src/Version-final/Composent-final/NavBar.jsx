import React from "react";
import upworkSVG from "../../assets/SVG/upwork.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className=" bg-white  fixed inset-x-0 top-0  shadow-sm flex justify-between items-center h-16 border-b-2 z-50">
      {/* Left section */}
      <div className="flex items-center ml-6 text-sm font-semibold">
        <Link to={"/"}>

          <img src={upworkSVG} alt="Upwork Logo" className="h-8 w-20" />

        </Link>

        <div className="ml-8  cursor-pointer hover:text-green-600">
          Find Talent
        </div>
        <Link to={"/Find_Job"} className="ml-8 cursor-pointer hover:text-green-600">
          Find Work
        </Link>
        <div className="ml-8 cursor-pointer hover:text-green-600">
          Why Upwork
        </div>
        <div className="ml-8 cursor-pointer hover:text-green-600">
          Enterprise
        </div>
      </div>
      {/* Right section */}
      <div className="flex items-center">
        {/* Search bar */}
        <div className="flex px-4 py-2 rounded-full border-2 border-gray-300 shadow-sm items-center font-semibold mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18px"
            className="fill-black mr-2"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-64 outline-none pl-2 bg-transparent text-gray-600 text-sm"
          />
        </div>

        {/* Log In and Sign Up */}
        <div className="flex pr-6 items-center">
          <Link
            to="/Login"
            className="mr-8 font-semibold text-sm cursor-pointer"
          >
            Log In
          </Link>

          <Link
            to="/Sign_Up"
            className="w-24 h-10 mr-3 cursor-pointer text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-green-600"
            style={{ backgroundColor: "#1C8704" }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>

  );
}
