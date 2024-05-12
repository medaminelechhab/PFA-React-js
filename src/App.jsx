// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./assets/pages/Login";
import SignUp from "./assets/pages/SignUp";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("user");
  useEffect(() => {
    // Vérifiez l'état de connexion à partir du localStorage au chargement de l'application
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedToken) {
      // S'il y a un token, l'utilisateur est connecté
      setIsLoggedIn(true);

      // Si le rôle est stocké, mettez à jour l'état du rôle
      if (storedRole) {
        setRole(storedRole);
      }
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
        />
        <Route
          path="/sidebar/*"
          element={isLoggedIn ? <Sidebar /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
