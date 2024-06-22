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
  "Gébs Plafonneur", "Gébs Staffeur", "Gébs Stucateur", "Gébs Moulurier",
  "Maçon Maçon en rénovation", "Maçon Maçon de pierres", "Maçon Maçon en construction neuve", "Maçon Maçon en monuments historiques",
  "Menuisier Menuisier en bâtiment", "Menuisier Menuisier en mobilier", "Menuisier Menuisier ébéniste", "Menuisier Menuisier charpentier",
  "Plombier Plombier sanitaire", "Plombier Plombier chauffagiste", "Plombier Plombier installateur", "Plombier Plombier en dépannage",
  "Électricien Électricien bâtiment", "Électricien Électricien industriel", "Électricien Électricien installateur", "Électricien Électricien de maintenance",
  "Peintre Peintre en bâtiment", "Peintre Peintre décorateur", "Peintre Peintre industriel", "Peintre Peintre en carrosserie",
  "Couvreur Couvreur zingueur", "Couvreur Couvreur ardoisier", "Couvreur Couvreur chaumier", "Couvreur Couvreur tuilier",
  "Forgeron Forgeron d'art", "Forgeron Ferronnier", "Forgeron Serrurier-métallier", "Forgeron Soudeur",
  "Carreleur Carreleur mosaïste", "Carreleur Carreleur marbrier", "Carreleur Carreleur faïencier", "Carreleur Carreleur poseur de sol",
  "Plâtrier Plâtrier staffeur", "Plâtrier Plâtrier traditionnel", "Plâtrier Plâtrier décorateur", "Plâtrier Plâtrier stucateur",
  "Charpentier Charpentier en bois", "Charpentier Charpentier métallique", "Charpentier Charpentier de marine", "Charpentier Charpentier de menuiserie",
  "Tailleur de pierre Sculpteur sur pierre", "Tailleur de pierre Tailleur de marbre", "Tailleur de pierre Tailleur de granit", "Tailleur de pierre Tailleur de calcaire",
  "Cordonnier1 Cordonnier traditionnel", "Cordonnier1 Cordonnier réparateur", "Cordonnier1 Cordonnier bottier", "Cordonnier1 Cordonnier maroquinier",
  "Tisserand Tisserand de tapis", "Tisserand Tisserand de soie", "Tisserand Tisserand de laine", "Tisserand Tisserand de coton",
  "Bijoutier Bijoutier créateur", "Bijoutier Bijoutier joaillier", "Bijoutier Bijoutier sertisseur", "Bijoutier Bijoutier en métaux précieux",
  "Potier Potier céramiste", "Potier Potier traditionnel", "Potier Potier moderne", "Potier Potier sculpteur",
  "Tapissier Tapissier d'ameublement", "Tapissier Tapissier décorateur", "Tapissier Tapissier en siège", "Tapissier Tapissier garnisseur",
  "Coutelier Coutelier d'art", "Coutelier Coutelier forgeron", "Coutelier Coutelier mécanicien", "Coutelier Coutelier en cuisine",
  "Maroquinier Maroquinier designer", "Maroquinier Maroquinier fabricant", "Maroquinier Maroquinier réparateur", "Maroquinier Maroquinier artisanal",
  "Maréchal-ferrant Maréchal-ferrant traditionnel", "Maréchal-ferrant Maréchal-ferrant sportif", "Maréchal-ferrant Maréchal-ferrant orthopédiste", "Maréchal-ferrant Maréchal-ferrant de courses",
  "Sellier Sellier automobile", "Sellier Sellier harnacheur", "Sellier Sellier garnisseur", "Sellier Sellier décorateur",
  "Restaurateur de meubles Restaurateur de meubles anciens", "Restaurateur de meubles Restaurateur de meubles en bois", "Restaurateur de meubles Restaurateur de meubles en cuir", "Restaurateur de meubles Restaurateur de meubles en métal",
  "Sculpteur Sculpteur sur bois", "Sculpteur Sculpteur sur pierre", "Sculpteur Sculpteur sur métal", "Sculpteur Sculpteur sur argile",
  "Graveur Graveur sur métal", "Graveur Graveur sur bois", "Graveur Graveur sur pierre", "Graveur Graveur sur verre",
  "Luthier Luthier de guitare", "Luthier Luthier de violon", "Luthier Luthier de oud", "Luthier Luthier de percussions",
  "Marbrier Marbrier de décoration", "Marbrier Marbrier funéraire", "Marbrier Marbrier de construction", "Marbrier Marbrier artistique",
  "Relieur Relieur d'art", "Relieur Relieur industriel", "Relieur Relieur restaurateur", "Relieur Relieur en papier",
  "Sérigraphe Sérigraphe textile", "Sérigraphe Sérigraphe industriel", "Sérigraphe Sérigraphe artistique", "Sérigraphe Sérigraphe publicitaire",
  "Coiffeur Coiffeur visagiste", "Coiffeur Coiffeur coloriste", "Coiffeur Coiffeur barbier", "Coiffeur Coiffeur styliste",
  "Horloger Horloger réparateur", "Horloger Horloger créateur", "Horloger Horloger bijoutier", "Horloger Horloger restaurateur"
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
      navigate("/Sign_Up/Register/freelance/6");
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
