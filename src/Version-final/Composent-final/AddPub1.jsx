import { useContext, useState } from "react";
import Input from "../../Input";
import Qct from "../../Qct";
import Footer from "../../pages1-10/Footer";
import { useNavigate } from "react-router-dom";
import React from 'react';

import { AnnonceContext } from "../Auth/AnnonceContext";
const pageData = {
    1: {
        titre: "Quel est votre besoin ?",
    },
};

export default function AddPub1() {
    const [error, setError] = useState(""); // State for the error message
    const usenavige = useNavigate()
    const { titre, setTitre } = useContext(AnnonceContext);

    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (titre.length == 0) { // Corrected comparison
            setError("Veuillez entrer une profession.");
        } else {
            setError("");
            usenavige("/Add_pub2")
        }
    };

    return (
        <>
            <div className="text-center ml-96 mt-9">
                <Qct titre={pageData[1].titre} />
            </div>
            <div className="ml-[400px] w-[800px] pt-5">
                <div>
                    <label htmlFor="projet" className="font-mono text-sm">
                        Votre projet en quelques mots
                    </label>
                </div>
                <input
                    type="text"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    placeholder="Ex : Je cherche un peintre pour ma maison, Rénovez mon salon..."
                    className="appearance-none cursor-pointer relative block w-[600px] mt-3 px-3 py-4 rounded-2xl border-2 focus:outline-none  focus:border-green-500"
                    id="projet"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <Footer
                prog={2}
                secend_button="Merci d'ajouter votre besoin"
                onSecendButtonClick={handleButtonClick}
            />
        </>
    );
}
