import React, { useContext, useState } from "react";
import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import Input from "../Input";
import AlertMessage from "./Add Work Experience"; // Assuming this is your alert component
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
import AlertMessage2 from "./Add Work Experience2";
import { useNavigate } from "react-router-dom";
const pageData = {
  1: {
    titre: "Clients like to know what you know - add your education here.",
    sousTitre:
      "You don’t have to have a degree. Adding any relevant education helps make your profile more visible.",
    nbr_page: 4,
    secend_button: "Thanks, For add education",
  },
};

export default function D() {
  const [add, setAdd] = useState(false);
  const { Eduction, SetEduction } = useContext(ProfileContext);
  const [error, setError] = useState(""); // State for the error message
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    if (Eduction.length === 0) {
      setError("This field is required.");
    } else {
      setError("");
      navigate("/Sign_Up/Refister/freelance/5");
    }
  };
  const handleChildClick = () => {
    setTimeout(() => {
      setAdd(true);
    }, 200);
  };

  const handleCloseAlert = () => {
    setError("");

    setAdd(false);
  };

  return (
    <div className="relative">
      {add && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <AlertMessage2 onClose={handleCloseAlert} />
        </div>
      )}
      <div
        className={`flex flex-col h-[665px] transition-opacity duration-300 ${
          add ? "blur-sm" : ""
        }`}
      >
        <div className="flex-grow pt-5">
          <div className="px-28">
            <Qct
              titre={pageData[1].titre}
              sousTitre={pageData[1].sousTitre}
              nbr_page={pageData[1].nbr_page}
            />
            <div className="">
              <Items
                onClick={handleChildClick}
                Value={Eduction}
                setValue={SetEduction}
              />{" "}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={4}
        secend_button="Next, add your education"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
