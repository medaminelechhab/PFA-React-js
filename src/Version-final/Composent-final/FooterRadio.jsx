import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Auth/ProfileContext";
export default function FooterRadio({ type }) {
  const { Role, SetRole } = useContext(ProfileContext);
  const navige = useNavigate();
  const handlclick = (e) => {
    SetRole(type);
    navige("/Sign_Up/refister");
  };
  return (
    <div>
      <div>
        {" "}
        {type ? (
          <button onClick={handlclick} to="/Sign_Up/Refister">
            <div className="  bg-green-700  shadow-md text-white w-auto px-5 h-10 pt-1 rounded-full  text-center  text-xl  font-extraligh ">
              Join as {type}
            </div>
          </button>
        ) : (
          <div className="  bg-gray-100 border border-gray-400 w-auto px-5 h-10 pt-1 rounded-full text-gray-400  text-center font-extraligh ">
            Continue as a Freelancer
          </div>
        )}{" "}
      </div>
      <div className=" mt-2  ">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-700 font-semibold  hover:underline focus:outline-none"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
