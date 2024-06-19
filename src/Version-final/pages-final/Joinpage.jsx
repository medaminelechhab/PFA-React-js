import React, { useContext, useState } from "react";
import business from "../../assets/images/businessman.png";
import Client from "../../assets/images/client.png";
import RadioCard from "../Composent-final/RadioCard";
import FooterRadio from "../Composent-final/FooterRadio";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Auth/ProfileContext";
const Joinpage = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const { services, Setservices } = useContext(ProfileContext);
  const navigate = useNavigate();
  const handleCardClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="justify-center items-center pt-7">
      <div className="text-center">
        <h1 className="mb-10 text-4xl font-bold text-black">
          Join as a Client or Freelancer
        </h1>
      </div>
      <div className="space-y-12 pt-4">
        <div className="flex justify-center space-x-8">
          <RadioCard
            titre="I’m a client, hiring for a project"
            images={business}
            value="client"
            onClick={handleCardClick}
            selected={selectedValue === "client"}
          />
          <RadioCard
            titre="I’m a freelancer, looking for work"
            images={Client}
            value="freelancer"
            onClick={handleCardClick}
            selected={selectedValue === "freelancer"}
          />
        </div>
        <div className="justify-center flex">
          <FooterRadio type={selectedValue} />
        </div>
      </div>
    </div>
  );
};

export default Joinpage;
