import React, { useContext, useState } from "react";
import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import Input from "../Input";
import AlertMessage from "./Add Work Experience"; // Assuming this is your alert component
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
import { useNavigate } from "react-router-dom";
const pageData = {
  1: {
    titre: "If you have relevant work experience, add it here.",
    sousTitre:
      "Freelancers who add their experience are twice as likely to win work. But if you’re just starting out, you can still create a great profile. Just head on to the next page.",
    nbr_page: 3,
    secend_button: "Next, add your education",
  },
};

export default function C() {
  const [add, setAdd] = useState(false);
  const { Experience, SetExperience } = useContext(ProfileContext);
  const [error, setError] = useState(""); // State for the error message
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    if (Experience.length === 0) {
      setError("This field is required.");
    } else {
      setError("");
      navigate("/Sign_Up/Register/freelance/4");
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
          <AlertMessage onClose={handleCloseAlert} />
        </div>
      )}
      <div
        className={`flex flex-col h-[665px] transition-opacity duration-300 ${add ? "blur-sm" : ""
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
                Value={Experience}
                setValue={SetExperience}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={3}
        secend_button="Next, add your education"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
