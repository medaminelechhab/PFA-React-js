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
  console.log("service value  =", services);
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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
