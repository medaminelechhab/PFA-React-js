import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import upworkSVG from "../../assets/SVG/upwork.svg";
import userprofile from "../../assets/images/amine1.jpg";
import out from "../../assets/images/logout.png";
import sijil from "../../assets/images/123.jpg";
import notif from "../../assets/SVG/svg.svg";
import { useNavigate } from "react-router-dom";

const notifications = [
  { id: 1, message: "Accéder à Find job peut être une manière de découvrir des annonces intéressantes publiées.", time: "12:40 PM" },
  { id: 2, message: "We've updated our Privacy Policy.", time: "12:40 PM" },
  { id: 2, message: "Ajoute une annonce svp.", time: "2:10 PM" },

];

export default function NavBar() {
  const login = localStorage.getItem("Login");
  const navigateur = useNavigate()
  const [showAlert, setShowAlert] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const handleLogout = () => {
    // Supprimer le refreshToken du localStorage
    localStorage.removeItem('refreshToken');

    // Supprimer l'accessToken du localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('Login');
    localStorage.removeItem('id');

    navigateur('/');
  };

  const toggleAlert = () => {
    setShowAlert(!showAlert);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowAlert(false);
  };

  // useEffect pour nettoyer les états lorsque le composant se démonte
  useEffect(() => {
    return () => {
      setShowAlert(false);
      setShowNotifications(false);
    };
  }, []); // Dépendance vide pour s'assurer que cela ne s'exécute qu'une seule fois à l'initialisation

  return (
    <nav className="bg-white fixed inset-x-0 top-0 shadow-sm flex justify-between items-center h-16 border-b-2 z-50">
      {/* Left section */}
      <div className="flex items-center ml-6 text-sm font-semibold">
        <Link to={"/"}>
          <img src={upworkSVG} alt="Upwork Logo" className="h-8 w-20" />
        </Link>
        <Link to={"/FindTalend"} className="ml-8 cursor-pointer hover:text-green-600">
          Find Talent
        </Link>

        <Link to={"/Find_Job"} className="ml-8 cursor-pointer hover:text-green-600">
          Find Work
        </Link>
        {login ? <Link to={"/Add_Pub"} className="ml-8 rounded-2xl bg-green-300   text-black h-8 w-52 text-center pt-1 cursor-pointer hover:text-green-600">
          Publier un projet similaire
        </Link> : null}

        {login && (
          <Link to={"/messgae"} className="ml-8 cursor-pointer hover:text-green-600">
            Messages
          </Link>
        )}
      </div>

      {/* Right section */}
      <div className="flex items-center">
        {/* Search bar */}
        <div className="flex px-4 py-2 rounded-full border-2 border-gray-300 shadow-sm items-center font-semibold mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18px"
            className="fill-black mr-2"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-64 outline-none pl-2 bg-transparent text-gray-600 text-sm"
          />
        </div>

        {/* Log In and Sign Up */}
        {!login ? (
          <div className="flex pr-6 items-center">
            <Link to="/Login" className="mr-8 font-semibold text-sm cursor-pointer">
              Log In
            </Link>

            <Link
              to="/Sign_Up"
              className="w-24 h-10 mr-3 cursor-pointer text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-green-600"
              style={{ backgroundColor: "#1C8704" }}
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex space-x-7 mr-9">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="relative focus:outline-none"
              >
                <img className="h-11 " src={notif} alt="" />
              </button>
              {showNotifications && (
                <div className="absolute mt-2 right-0 w-80 bg-white rounded-lg shadow-lg">
                  <div className="py-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start px-4 py-2 hover:bg-gray-100"
                      >
                        <img className="h-7 mr-1 mt-1" src={sijil} alt="" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700">{notification.message}</p>
                          <p className="text-xs font-semibold text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 text-center text-sm text-blue-500 hover:bg-gray-100 cursor-pointer">
                    See All Notifications
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <div className="cursor-pointer" onClick={toggleAlert}>
                <img className="size-11 border rounded-full" src={userprofile} alt="User Profile" />
              </div>
              {showAlert && (
                <div className="absolute px-10 mt-10 border-2 border-gray-100 shadow-2xl right-1 h-auto py-2 bg-white w-56 rounded-lg z-10">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <img className="size-12 border rounded-full" src={userprofile} alt="User Profile" />
                    </div>
                    <h2 className="text-base font-medium">Mouaad EL Khadari</h2>
                    <p className="text-gray-500 text-xs font-semibold">Client</p>
                  </div>
                  <div className="flex items-center mt-6 cursor-pointer rounded-3xl border-green-600 border-[3px] w-32">
                    <img src={out} alt="Logout" className="ml-3 h-6 w-6 mr-4" />
                    <span onClick={handleLogout} className="text-black text-base border-2 text-center  border-gray-100 font-normal">Log out</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
