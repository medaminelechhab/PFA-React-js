import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import Input from "../Input";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
const pageData = {
  1: {
    titre: "How would you like to tell us about yourself?",
    sousTitre:
      "We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.",
    nbr_page: 2,
  },
};
export default function B() {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State for the error message
  const { professional, Setprofessional } = useContext(ProfileContext);
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (professional.length <= 1) {
      // Corrected length check
      setError("This field is required.");
    } else {
      setError("");
      navigate("/Sign_Up/Refister/freelance/3"); // Corrected the route spelling
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24 space-y-8">
          <div>
            <Qct
              titre={pageData[1].titre}
              sousTitre={pageData[1].sousTitre}
              nbr_page={pageData[1].nbr_page}
            />
          </div>
          <div className="max-w-128">
            <Input
              desgine_label="font-roboto"
              label="Your professional role"
              id="Your professional role"
              label_spaceinput="2"
              name="Your professional role"
              type="text"
              placeholder="Software Engineer | Javascript  | iOS"
              required
              value={professional}
              onChange={(e) => Setprofessional(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
          </div>
        </div>
      </div>
      <Footer
        prog={2}
        secend_button="thanks for adding experience"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
