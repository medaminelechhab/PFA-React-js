import React from "react";
import upwork from "./assets/SVG/upwork.svg";
import { Link } from "react-router-dom";

export default function NavbarSign() {
  return (
    <div className="h-16 ">
      <div className="px-6 pt-4">
        <Link to="/">
          <img src={upwork} alt="Upwork logo" className="h-7 w-20" />
        </Link>
      </div>
      <div></div>
    </div>
  );
}
