import React from 'react';
import HomePhoto from '../icons/artisantest.jpg';
import MicrosoftLogo from "../icons/microsoft.svg";
import AirbnbLogo from "../icons/airbnb.svg";
import BissellLogo from "../icons/bissell.svg";
import NavBar from "./NavBar";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className="relative h-screen">
                <img src={HomePhoto} alt="Illustration" className="absolute inset-0 object-cover rounded-3xl"
                     style={{width: "1000px", left: "450px", top: "125px", height: "400px", objectFit: "cover"}}/>
                <div className="w-1/2 bottom-60   px-20 absolute inset-0 flex justify-center items-center">
                    <div className="w-auto h-72 z-15 text-black bg-white p-4 rounded-3xl  ">
                        <h1 className="text-5xl lg:text-8xl mb-4 font-serif">How work should work</h1>
                        <p className="text-lg lg:text-2xl mb-4 font-custom-sans">Forget the old rules. You can have the best
                            people. Right now. Right here.</p>
                    </div>
                </div>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-20 rounded-full absolute bottom-64 m-5 left-32">Get
                    Started
                </button>

                <div className="absolute b bottom-56 left-64 transform -translate-x-1/2 flex items-center">
                    <p className="mr-4 text-gray-600 font-bold text-sm">Trusted by</p>
                    <img src={MicrosoftLogo} alt="Microsoft Logo" className="h-6 mr-2 filter grayscale"/>
                    <img src={AirbnbLogo} alt="Airbnb Logo" className="h-6 mr-2 filter grayscale"/>
                    <img src={BissellLogo} alt="Amazon Logo" className="h-6 filter grayscale"/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
