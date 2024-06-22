import Items from "../Items";
import Qct from "../Qct";
import Footer from "./Footer";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cih from "../assets/images/Cih.png";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
import { useContext } from "react";
const pageData = {
  1: {
    titre: "Etbalier virrmenet",
  },
};

export default function J() {
  const { services } = useContext(ProfileContext);
  const navig = useNavigate()
  const handleButtonClick = () => {
    navig("/Sign_Up/Register/freelance/10")







  };

  return (
    <div className="flex flex-col h-auto">
      <div className="flex-grow  ">
        <div className="px-24 justify-center flex">
          <Qct
            titre={pageData[1].titre}
            sousTitre={pageData[1].sousTitre}
            message={pageData[1].message}
            nbr_page={pageData[1].nbr_page}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="border-dashed border-[3px] flex border-green-800 w-1/2 h-96 rounded-3xl shadow-lg bg-white">
          <div className="w-1/2 ml-3 py-2 flex items-center justify-center">
            <img src={Cih} className="h-32 w-auto" alt="CIH Bank Logo" />
          </div>
          <div className="pl-2 w-1/2 flex flex-col justify-center">
            <div className="text-2xl text-center font-serif font-semibold">
              CIH Bank Account
            </div>
            <div className="pt-4 text-xl pl-8 font-mono">RIB: 123456789982</div>
            <div className="pt-4 text-xl pl-8 font-mono">Motif: Upworks</div>
            <div className="pt-4 text-xl pl-8 font-mono">
              Amount: {services == "Standard" ? "0" : null}
              {services == "Month" ? "20" : null}
              {services == "Year" ? "200" : null} DH
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={8}
        secend_button="Submit Register"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
