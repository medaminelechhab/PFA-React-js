import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Amine from "./Amine.jsx";
import NavBar from "./Version-final/Composent-final/NavBar";
import Joinpage from "./Version-final/pages-final/Joinpage.jsx";
import NavbarSign from "./NavbarSign.jsx";
import Login from "./Version-final/pages-final/Login.jsx";
import Register from "./Version-final/pages-final/Register.jsx";
import { ProfileProvider } from "./Version-final/Auth/ProfileContext.jsx";
import A from "./pages1-10/A.jsx";
import B from "./pages1-10/B.jsx";
import C from "./pages1-10/C.jsx";
import SkillManager from "./pages1-10/SkillManager.jsx";
import D from "./pages1-10/D.jsx";
import E from "./pages1-10/E.jsx";
import F from "./pages1-10/F.jsx";
import { Outlet } from "react-router-dom";
import G from "./pages1-10/G.jsx";
import H from "./pages1-10/H.jsx";
import K from "./pages1-10/K.jsx";
import J from "./pages1-10/J.jsx";
import L from "./pages1-10/L.jsx";
import FindJob from "./Version-final/pages-final/FindJob.jsx";
import Footer2 from "./Version-final/Composent-final/Footer2.jsx";
import Concept from "./Version-final/Composent-final/Concept.jsx";
import AddPub1 from "./Version-final/Composent-final/AddPub1.jsx";
import AddPub2 from "./Version-final/Composent-final/AddPub2.jsx";
import AddPub3 from "./Version-final/Composent-final/AddPub3.jsx";
import AddPub4 from "./Version-final/Composent-final/AddPub4.jsx";
import AddPub5 from "./Version-final/Composent-final/AddPub5.jsx";
import FindTalend from "./Version-final/Composent-final/FindTalend.jsx";
import Chat from "./chat/chat.jsx";

import { ProfileProvider1 } from "./Version-final/Auth/AnnonceContext.jsx";
import JobDesc from "./Version-final/Composent-final/JobDesc.jsx";
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
        <ProfileProvider1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Amine />
                </>
              }
            />
            <Route
              path="/FindTalend"
              element={
                <>
                  <NavBar />
                  <FindTalend />
                </>
              }
            />
            <Route
              path="/Find_Job"
              element={
                <>
                  <NavBar />
                  <FindJob />
                  <Footer2 />
                </>
              }
            />
            <Route
              path="/FindTalend/Detaille/:id"
              element={
                <>
                  <NavBar />
                  <JobDesc></JobDesc>
                  <Footer2 />
                </>
              }
            />
            <Route
              path="/Find_Job/Detaille/:id"
              element={
                <>
                  <NavBar />
                  <Concept />
                  <Footer2 />
                </>
              }
            />
            <Route
              path="/Add_Pub"
              element={
                <>
                  <NavbarSign />
                  <AddPub1 />
                </>
              }
            />
            <Route
              path="/Add_Pub2"
              element={
                <>
                  <NavbarSign />
                  <AddPub2 />
                </>
              }
            />
            <Route
              path="/Add_Pub3"
              element={
                <>
                  <NavbarSign />
                  <AddPub3 />
                </>
              }
            />
            <Route
              path="/Add_Pub4"
              element={
                <>
                  <NavbarSign />
                  <AddPub4 />
                </>
              }
            />
            <Route
              path="/Add_Pub5"
              element={
                <>
                  <NavbarSign />
                  <AddPub5 />
                </>
              }
            />
            <Route path="/Sign_Up" element={<SignUpLayout />}>
              <Route index element={<Joinpage />} />
              <Route path="Register" element={<Register />} />
              <Route path="Register/freelance/1" element={<A />} />
              <Route path="Register/freelance/2" element={<B />} />
              <Route path="Register/freelance/3" element={<C />} />
              <Route path="Register/freelance/4" element={<D />} />
              <Route path="Register/freelance/5" element={<E />} />
              <Route path="Register/freelance/6" element={<F />} />
              <Route path="Register/freelance/7" element={<G />} />
              <Route path="Register/freelance/8" element={<H />} />
              <Route path="Register/freelance/9" element={<J />} />
              <Route path="Register/freelance/10" element={<K />} />
              <Route path="Register/freelance/11" element={<L />} />

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
            <Route
              path="/Login2"
              element={
                <>
                  <NavbarSign />
                  <Login />
                </>
              }
            />
            <Route
              path="/messgae/:id"
              element={
                <>
                  <NavBar />
                  <Chat />
                </>
              }
            />
            <Route
              path="/messgae"
              element={
                <>
                  <NavBar />
                  <Chat />
                </>
              }
            />
          </Routes>
        </ProfileProvider1>
      </ProfileProvider>
    </Router>
  );
};

export default App;
