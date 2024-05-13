import React from "react";
import NavBar from "../Composent-final/NavBar";
import HomePhoto from "../../assets/images/HomePhoto1.jpg";
import MicrosoftLogo from "../../assets/SVG/microsoft.svg";
import AirbnbLogo from "../../assets/SVG/airbnb.svg";
import BissellLogo from "../../assets/SVG/bissell.svg";

const HomePage = () => {
  return (
    <div className="pt-96   ">
      <div className=" flex overflow-hidden ">
        <div>
          <img
            src={HomePhoto}
            alt="Illustration"
            className="absolute  rounded-3xl"
            style={{
              width: "1000px",
              left: "450px",
              top: "125px",
              height: "400px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="absolute overflow-hidden  bg-white ml-20 mb-24 bottom-60 rounded-3xl z-10 text-start">
          <div className=" h-70 text-black  m-5 max-w-[570px] ">
            <h1 className="text-5xl lg:text-8xl mb-4 font-serif">
              How work should work
            </h1>
            <p className="text-lg lg:text-2xl mb-4  font-custom-sans ">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </p>
          </div>
        </div>
        <button className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-20 rounded-full absolute bottom-64 m-5 left-32">
          Get Started
        </button>

        <div className="absolute b bottom-56 left-64  transform -translate-x-1/2 flex items-center">
          <p className="mr-4 text-gray-600 font-bold text-sm">Trusted by</p>
          <img
            src={MicrosoftLogo}
            alt="Microsoft Logo"
            className="h-6 mr-2 filter grayscale"
          />
          <img
            src={AirbnbLogo}
            alt="Airbnb Logo"
            className="h-6 mr-2 filter grayscale"
          />
          <img
            src={BissellLogo}
            alt="Amazon Logo"
            className="h-6 filter grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
