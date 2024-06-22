import React, { useState, useEffect } from "react";
import TagsInput from "react-tagsinput";
import 'react-tagsinput/react-tagsinput.css'; // Assurez-vous d'inclure les styles pour react-tagsinput
import Input from "../../Input";

import CardII from './CardII'; // Assurez-vous que ce composant est correctement importé

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
import { Link } from 'react-router-dom';

const FindTalend = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [type, Settype] = useState("")
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null)
    const [professional, Setprofessional] = useState(""); // State for the error message
    const handleSearch = () => {
        if (type === "Text") {
            console.log("Searching by Text:", professional);
        } else if (type === "service") {
            console.log("Searching by Skills:", skills);
        }
    };

    const handleChange = (tags) => {
        const validSkills = tags.filter((tag) => suggestedSkills.includes(tag));
        if (validSkills.length <= 15) {
            setSkills(validSkills);
        }
    };

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("accessToken"); // Remplacez par votre token Bearer
            const response = await fetch("http://localhost:8082/profiles", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch profile data");
            }
            const data = await response.json();
            setProfile(data);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        setSkills([]);
        fetchProfile();

    }, []);
    const handleInputChange = (e) => {
        setError('');
        setInputValue(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        if (!skills.includes(suggestion) && skills.length < 15) {
            setSkills([...skills, suggestion]);
        }
        setInputValue('');
    };

    const filteredSuggestions = suggestedSkills.filter((skill) =>
        skill.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="pt-16 py-8 bg-gray-100">
                <div className="bg-blue-300 text-6xl py-5 font-serif1 text-white px-48">
                    Find an Artisonne
                </div>
            </div>
            <div className="mx-40 flex space-x-8 text-[19px]">
                <div className="font-serif   text-2xl text-slate-850">You can choose to search by entering specific skills or by using a text-based search?</div>
                <div className="flex space-x-5">
                    <button onClick={() => Settype("Text")} className=" border-2  font-semibold hover:bg-green-400 hover:text-white border-green-400 rounded-full px-6">By Text</button>
                    <button onClick={() => Settype("service")} className=" border-2  font-semibold hover:bg-green-400 hover:text-white border-green-400 rounded-full px-6">By Services</button>
                </div>
            </div>

            <div className="mx-40 mt-6 " >

                {type == "service" ? <div className="max-w-128 ">
                    <div className="relative">
                        <label className="block text-gray-700 text-ms mb-2 font-serif">
                            Your skills
                        </label>
                        <TagsInput
                            value={skills}
                            onChange={handleChange}
                            className=" w-[700px]  border-dashed border-2 bg-white pl-5 border-black rounded-xl"
                            inputProps={{
                                placeholder: "Enter skills",
                                value: inputValue,
                                onChange: handleInputChange,
                            }}
                            renderTag={({ tag, key, onRemove }) => (
                                <span
                                    key={key}
                                    className="text-black border-2 bg-gray-200 border-gray-400 rounded-full w-auto px-2 py- m-1 inline-flex text-center items-center"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                                        onClick={() => onRemove(key)}
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                        />
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
                        <div className="absolute  text-xs pt-2 font-bold pr-4">
                            Max 15 Skills
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div> : null}
                {type == "Text" ? <div className="max-w-[700px]">
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
                </div> : null}
                <div className=" mt-6 mb-16">
                    <div className="flex space-x-4">
                        {type === "service" && (
                            <button onClick={handleSearch} className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-2 rounded-full">
                                Search by Skills
                            </button>
                        )}
                        {type === "Text" && (
                            <button onClick={handleSearch} className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-2 rounded-full">
                                Search by Text
                            </button>
                        )}
                    </div>
                </div>

            </div>
            <div className="bg-gray-100 min-h-screen">
                <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-40">
                    {profile ? (
                        profile.map((item, index) => (
                            <Link to={`/FindTalend/detaille/${item.id}`} key={index}>
                                <CardII searchTerm={item} />
                            </Link>
                        ))
                    ) : (
                        <p>Loading profile...</p>
                    )}
                    {error && <p>Error: {error}</p>}
                </div>
            </div>
        </div>
    );
};

export default FindTalend;
