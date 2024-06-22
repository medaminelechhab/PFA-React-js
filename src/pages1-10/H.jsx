import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
import CardPircing from "./CardPircing";

export default function H() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setPack, Pack } = useContext(ProfileContext);


  const handleButtonClick = () => {
    if (services.length == 0) {
      setError("This field is required.");
    } else {
      setError("");
      navigate("/Sign_Up/Register/freelance/9");
    }
  };

  return (
    <div className=" ">
      <section className="flex items-center justify-center ">
        <div
          className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
          id="pricing"
        >
          <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">
            Pay once, use forever
          </h3>
          <div className="flex space-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <CardPircing
              type="Standard"
              price="0"
              oldprice="15"
              A="Show Profile"
              B="7/7 24/24 services"
              C="Show artisone"
              isSelected={Pack === "Standard"}
            />
            <CardPircing
              type="Month"
              price="20"
              oldprice="39"
              color="bl"
              A="Show Profile"
              B="7/7 24/24 services"
              C="Show artisone"
              isSelected={Pack === "Month"}
            />
            <CardPircing
              type="Year"
              price="200"
              oldprice="280"
              A="Show Profile"
              B="7/7 24/24 services"
              C="Show artisone"
              isSelected={Pack === "Year"}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </section>
      <Footer
        prog={8}
        secend_button="thanks for adding experience"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
