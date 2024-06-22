import { useState } from "react";
import Input from "../../Input";
import Qct from "../../Qct";
import Footer from "../../pages1-10/Footer";
import { useNavigate } from "react-router-dom";
import svg from "../../assets/SVG/alert.svg"
import { AnnonceContext } from "../Auth/AnnonceContext";
import { useContext } from "react";
import React from 'react';

const pageData = {
    1: {
        titre: "Détaillez votre besoin",
    },
};

export default function AddPub2() {
    const usenavige = useNavigate()
    const [error, setError] = useState(""); // State for the error message
    const { besoin, setBesoin } = useContext(AnnonceContext)
    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (besoin.length == 0) { // Corrected comparison
            setError("Veuillez entrer une profession.");
        } else {
            setError("");
            usenavige("/Add_pub3")
        }
    };

    return (
        <>
            <div className="text-center ml-96 mt-9">
                <Qct titre={pageData[1].titre} />
            </div>
            <div className="ml-[500px] w-[800px] pt-5">
                <div>
                    <label htmlFor="projet" className="font-mono text-lg">
                        Détaillez votre besoin :                   </label>
                </div>

                <textarea
                    value={besoin}
                    onChange={(e) => setBesoin(e.target.value)}
                    placeholder="Nous recherchons un freelance pour... Notre besoin porte principalement sur... Rénover des murs et peinture... Notre mission doit être terminée avant le..."
                    className=" appearance-none cursor-pointer relative block w-[600px]  h-60 mt-3 pl-5  pr-[280px] py-4 rounded-2xl border-2 focus:outline-none  focus:border-green-500"
                    id="projet"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}


                <div className="bg-blue-100 mt-8 flex  ml-20 text-center text-ms font-serif text-blue-800 py-4  rounded-2xl   w-[500px]">
                    <div className="ml-3 ">
                        <img src={svg} className="size-7" />
                    </div>
                    <div className=" ml-5">Recevez   <span className="text-black font-bold ">au moins
                        6 devis
                    </span> en détaillant votre projet</div>

                </div>
            </div>


            <Footer
                prog={5}
                secend_button="Merci d'ajouter votre besoin"
                onSecendButtonClick={handleButtonClick}
            />
        </>
    );
}
