import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amine from "./Amine.jsx";
import NavBar from "./Version-final/Composent-final/NavBar";
import Joinpage from "./Version-final/pages-final/Joinpage.jsx";
import NavbarSign from "./NavbarSign.jsx";
import Login from "../src/Version-final/pages-final/Login.jsx";
import Register from "./Version-final/pages-final/Register.jsx";
import { ProfileProvider } from "./Version-final/Auth/ProfileContext.jsx";
import A from "../src/pages1-10/A.jsx";
import B from "../src/pages1-10/B.jsx";
import C from "../src/pages1-10/C.jsx";
import SkillManager from "./pages1-10/SkillManager.jsx";
import D from "./pages1-10/D.jsx";
import E from "./pages1-10/E.jsx";
import F from "./pages1-10/F.jsx";
import { Outlet } from "react-router-dom";
import G from "./pages1-10/G.jsx";
import H from "./pages1-10/H.jsx";
import J from "./pages1-10/J.jsx";
import FindJob from "./Version-final/pages-final/FindJob.jsx";
import Footer from "./pages1-10/Footer.jsx";
import Footer2 from "./Version-final/Composent-final/Footer2.jsx";
import Concept from "./Version-final/Composent-final/Concept.jsx";
import AddPub1 from "./Version-final/Composent-final/AddPub1.jsx";
import AddPub2 from "./Version-final/Composent-final/AddPub2.jsx";

const SignUpLayout = () => (
  <>
    <NavbarSign />
    <Outlet />
  </>
);

const App = () => {
  return (
    <Router>
      <ProfileProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Amine />
              </>
            }
          /><Route
            path="/Find_Job"
            element={
              <>
                <NavBar />
                <FindJob />
                <Footer2></Footer2>
              </>
            }
          />
          <Route
            path="/Find_Job/Detaille"
            element={
              <>
                <NavBar />
                <Concept />
                <Footer2></Footer2>
              </>
            }
          />
          <Route
            path="/Add_Pub"
            element={
              <>
                <NavbarSign />

                <AddPub1></AddPub1>
              </>
            }
          />
          <Route
            path="/Add_Pub2"
            element={
              <>
                <NavbarSign />

                <AddPub2></AddPub2>
              </>
            }
          />
          <Route path="/Sign_Up" element={<SignUpLayout />}>
            <Route index element={<Joinpage />} />
            <Route path="Refister" element={<Register />} />
            <Route path="Refister/freelance/1" element={<A />} />
            <Route path="Refister/freelance/2" element={<B />} />
            <Route path="Refister/freelance/3" element={<C />} />
            <Route path="Refister/freelance/4" element={<D />} />
            <Route path="Refister/freelance/5" element={<E />} />
            <Route path="Refister/freelance/6" element={<F />} />
            <Route path="Refister/freelance/7" element={<G />} />
            <Route path="Refister/freelance/8" element={<H />} />
            <Route path="Refister/freelance/9" element={<J />} />
          </Route>
          <Route
            path="/Login"
            element={
              <>
                <NavbarSign />
                <Login />
              </>
            }
          />
        </Routes>
      </ProfileProvider>
    </Router>
  );
};

export default App;
