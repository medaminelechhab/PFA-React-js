import React, { createContext, useState } from "react";

// Create the context
const AnnonceContext = createContext();

// Create a provider component
const ProfileProvider1 = ({ children }) => {
    const idUser = 1;

    const [titre, setTitre] = useState("");
    const [besoin, setBesoin] = useState("");
    const [services, setServices] = useState([]);
    const [budget, setBudget] = useState('');
    const [image, setimage] = useState([]);

    // Combine state values into a single object
    const combinedState = {
        titre,
        besoin,
        services,
        budget,
        image,
        idUser

    };

    // Convert the combined state object to a JSON string
    const json = JSON.stringify(combinedState, null, 2);


    return (
        <AnnonceContext.Provider
            value={{
                titre,
                setTitre,
                besoin,
                setBesoin,
                services,
                setServices,
                budget,
                setBudget,
                image,
                setimage,
                json
            }}
        >
            {children}
        </AnnonceContext.Provider>
    );
};

export { AnnonceContext, ProfileProvider1 };
