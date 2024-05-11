import React from "react";
import plusSVG from "../src/assets/SVG/plus.svg";

export default function Items() {
  return (
    <div className=" pt-2">
      <div className="bg-gray-100 rounded-3xl w-100 h-64 border-dashed border-2 border-gray-400 flex  items-center">
        <div className="m-7">
          <div className="">
            {" "}
            <img src={plusSVG} className="w-10 h-10" alt="Plus Icon" />
          </div>
          <div className="text-2xl font-medium pt-3 text-gray-500">
            Add experience
          </div>
        </div>
      </div>
    </div>
  );
}
