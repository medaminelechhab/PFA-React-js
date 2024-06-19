import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import Input from "../Input";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "tailwindcss/tailwind.css";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
const suggestedSkills = [
  "Oracle Enterprise Service Bus",
  "Eric",
  "Spacewalk",
  "Quark Xpress",
  "Google Closure",
  "Spock",
  "Autodesk Revit",
  "Microsoft Virtual Server",
  "Mud",
  "YUI Library",
  "Agavi",
  "RapidMiner",
  "Mapinfo",
  "Bremaxx",
  "Oracle Enterprise Service Bus",
  "Eric",
  "Spacewalk",
  "Quark Xpress",
  "Google Closure",
  "Spock",
  "Autodesk Revit",
  "Microsoft Virtual Server",
  "Mud",
  "YUI Library",
  "Agavi",
  "RapidMiner",
  "Mapinfo",
  "Bremaxx",
  "Ranorex Studio",
  "Capistrano",
  "Auctiva",
  "Abaqus",
  "IBM SPSS",
  "Software",
  "OpenFOAM",
  "Fiddler",
  "Revinate",
  "Statpoint Statgraphics",
  "Nuke",
  "Autoit",
  "Ranorex Studio",
  "Capistrano",
  "Auctiva",
  "Abaqus",
  "IBM SPSS",
  "Software",
  "OpenFOAM",
  "Fiddler",
  "Revinate",
  "Statpoint Statgraphics",
  "Nuke",
  "Autoit",
];
const pageData = {
  1: {
    titre: "Nearly there! What work are you here to do?",
    sousTitre:
      "Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add or remove the ones we’ve suggested, or start typing to pick more.",
    nbr_page: 5,
  },
};

export default function E() {
  const navigate = useNavigate();

  const [error, setError] = useState(""); // State for the error message
  const { Setskill } = useContext(ProfileContext);
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (skills.length === 0) {
      setError("This field is required.");
    } else {
      setError("");
      Setskill((prev) => [...prev, skills]);
      navigate("/Sign_Up/Refister/freelance/6");
    }
  };
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (tags) => {
    const validSkills = tags.filter((tag) => suggestedSkills.includes(tag));
    if (validSkills.length <= 15) {
      setSkills(validSkills);
    }
  };
  useEffect(() => {
    // Cette fonction sera appelée lorsque le composant est monté
    // Mettez à jour l'état des compétences pour le vider
    Setskill([]);
  }, []); // Le tableau vide indique que cela ne doit être exécuté qu'une seule fois, lorsque le composant est monté

  const handleInputChange = (e) => {
    setError("");

    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!skills.includes(suggestion) && skills.length < 15) {
      setSkills([...skills, suggestion]);
    }
    setInputValue("");
  };

  const filteredSuggestions = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24 space-y-6">
          <div>
            <Qct
              titre={pageData[1].titre}
              sousTitre={pageData[1].sousTitre}
              nbr_page={pageData[1].nbr_page}
            />
          </div>
          <div className="max-w-128">
            <div className="relative">
              <div className="">
                <label className="block text-gray-700 text-ms mb-2 font-serif1">
                  Your skills
                </label>
                <TagsInput
                  className="border-2 border-gray-200 rounded-md hover:border-gray-300 "
                  value={skills}
                  onChange={handleChange}
                  inputProps={{
                    placeholder: "Enter skills",
                    value: inputValue,
                    onChange: handleInputChange,
                  }}
                  renderTag={({
                    tag,
                    key,
                    disabled,
                    onRemove,
                    classNameRemove,
                    getTagDisplayValue,
                    ...props
                  }) => (
                    <span
                      key={key}
                      {...props}
                      className=" text-black border-2 bg-gray-200  border-gray-400 rounded-full w-auto px-2 py- m-1 inline-flex text-center items-center"
                    >
                      {getTagDisplayValue(tag)}
                      {!disabled && (
                        <button
                          type="button"
                          className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                          onClick={() => onRemove(key)}
                        >
                          ×
                        </button>
                      )}
                    </span>
                  )}
                />
              </div>
              {inputValue && (
                <div className="w-96 overflow-y-auto max-h-[200px] absolute top-full left-0 shadow-lg z-10 bg-white">
                  <div className="flex flex-col h-full rounded-lg">
                    {filteredSuggestions
                      .slice(0, 15 - skills.length)
                      .map((skill, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(skill)}
                          className="text-gray-800 hover:text-gray-900 py-2 px-4 border-b border-gray-300 last:border-b-0 transition-colors duration-300 ease-in-out"
                        >
                          {skill}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              <div className="absolute   right-0   text-end text-xs pt-2 font-bold pr-4">
                Max 15 Skills
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={5}
        secend_button="thanks for adding experience"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
