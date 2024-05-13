import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Input from "../Input";
import AlertMessage from "./Add Work Experience";
const pageData = {
  1: {
    titre: "If you have relevant work experience, add it here.",
    sousTitre:
      "Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.",
    message: "Create your profile  ",
    nbr_page: 3,
    secend_button: "Next,add your education",
  },
};
export default function C() {
  const [add, setAdd] = useState(false);
  const handleChildClick1 = () => {};
  const handleChildClick = () => {
    setTimeout(() => {
      setAdd(true); // Définir add à true après 1 seconde
    }, 200);
  };
  return (
    <div className="   ">
      <div className=" ">
        {add ? <AlertMessage onClick={handleChildClick1}></AlertMessage> : null}
      </div>
      ;{/* Appliquer l'opacité à cette div */}
      <div className={`flex flex-col min-h-screen ${add ? "opacity-0" : ""}`}>
        <NavbarSign />
        <div className="flex-grow  pt-14">
          <div className="px-28 ">
            <div>
              {" "}
              <Qct
                titre={pageData[1].titre}
                sousTitre={pageData[1].sousTitre}
                message={pageData[1].message}
                nbr_page={pageData[1].nbr_page}
              />
            </div>

            <div className="max-w-128">
              {" "}
              <Items onClick={handleChildClick}></Items>
            </div>
          </div>
        </div>
        <Footer nbr_page="1" secend_button={pageData[1].secend_button}></Footer>
      </div>
    </div>
  );
}
