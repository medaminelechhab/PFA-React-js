import React from "react";
import Items from "./Items";
import time from "./assets/SVG/time.svg";

export default function Qct({ titre, sousTitre, message, nbr_page }) {
  return (
    <div className="space-y-5">
      <div className="font-semibold tracking-wide flex items-center">
        <div className="mr-3 text-xs"> {nbr_page}/10</div>
        {message.length > 0 ? (
          <div className="flex items-center">
            <div className="text-xs mr-2 font-normal">{message}</div>
            <img src={time} className="size-4 mr-2" />
            <div className="text-xs mr-2 font-normal text-black">5-10 min</div>
          </div>
        ) : null}
      </div>
      <h1 className="font-serif1 max-w-128 text-4xl text-slate-850">{titre}</h1>
      <h2 className="max-w-120 text-ms font-serif">{sousTitre}</h2>
    </div>
  );
}
