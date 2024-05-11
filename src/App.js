// App.js
import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import JoinPage from "./components/JoinPage";

function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<JoinPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<HomePage />} />




        </Routes>
      </Router>
      </div>
  );
}

export default App;
