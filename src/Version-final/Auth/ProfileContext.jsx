import React, { createContext, useState } from "react";

// Create the context
const ProfileContext = createContext();

// Create a provider component
const ProfileProvider = ({ children }) => {
  const [Role, SetRole] = useState([]);
  const [professional, Setprofessional] = useState([]);
  const [Experience, SetExperience] = useState([]);
  const [Eduction, SetEduction] = useState([]);
  const [skill, Setskill] = useState([]);
  const [Textera, SetTextera] = useState([]);
  const [services, Setservices] = useState([]);
  const [Pack, setPack] = useState([]);
  const [photoProfile, setphotoProfile] = useState([]);
  const [collectionPhotosProject, setcollectionPhotosProject] = useState([]);


  // Combine state values into a single object
  const combinedState = {
    skill,
    Experience,
    Eduction,
    professional,
    Textera,
    Role,
    services,
    Pack,
    photoProfile,
    collectionPhotosProject


  };

  // Convert the combined state object to a JSON string
  const json = JSON.stringify(combinedState, null, 2);

  console.log("Combined JSON State2:", json);
  return (
    <ProfileContext.Provider
      value={{
        skill,
        Setskill,
        Experience,
        SetExperience,
        Eduction,
        SetEduction,
        professional,
        Setprofessional,
        Textera,
        SetTextera,
        Role,
        SetRole,
        services,
        Setservices,
        Pack,
        setPack,
        photoProfile,
        setphotoProfile,
        collectionPhotosProject,
        setcollectionPhotosProject,
        json

      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
