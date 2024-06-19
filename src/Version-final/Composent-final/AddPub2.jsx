import { useState } from "react";
import Input from "../../Input";
import Qct from "../../Qct";
import Footer from "../../pages1-10/Footer";
import { useNavigate } from "react-router-dom";
import svg from "../../assets/SVG/alert.svg"
const pageData = {
    1: {
        titre: "Détaillez votre besoin",
    },
};

export default function AddPub2() {
    const usenavige = useNavigate()
    const [error, setError] = useState(""); // State for the error message
    const [professional, setProfessional] = useState(""); // Corrected state hook
    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("salut")

        if (professional.length == 0) { // Corrected comparison
            setError("Veuillez entrer une profession.");
        } else {
            setError("");
            console.log("salut")
            usenavige("/Add_pub3")
        }
    };

    return (
        <>
            <div className="text-center ml-96 mt-9">
                <Qct titre={pageData[1].titre} />
            </div>
            <div className="ml-[400px] w-[800px] pt-5">
                <div>
                    <label htmlFor="projet" className="font-mono text-lg">
                        Détails de votre projet :                   </label>
                </div>

                <textarea
                    value={professional}
                    onChange={(e) => setProfessional(e.target.value)}
                    placeholder="Nous recherchons un freelance pour ... Notre besoin porte principalement sur... Les compétences nécessaires sont... Notre projet doit être terminé avant le..."
                    className=" appearance-none cursor-pointer relative block w-[800px] h-60 mt-3 px-3 py-4 rounded-2xl border-2 focus:outline-none  focus:border-green-500"
                    id="projet"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}


                <div className="bg-blue-100 mt-8 flex  ml-36 text-center text-ms font-serif text-blue-800 py-4  rounded-2xl   w-[500px]">
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
