import Items from "./Items";
import Qct from "./Qct";
import NavbarSign from "./NavbarSign";
import NavBar from "../src/Version-final/Composent-final/NavBar";

import HomePage from "../src/Version-final/pages-final/HomePage";
import Caracteristiques from "./Version-final/Composent-final/Caracteristiques";
import HomePageII from "./Version-final/Composent-final/HomePageII";

export default function Amine() {
  return (
    <>
      <NavBar></NavBar>
      <div className="">
        <HomePage></HomePage>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-0.75  px-8 mt-52 bg-gray-300  w-120   rounded-full"></div>
      </div>
      <Caracteristiques></Caracteristiques>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-8 mt-20 bg-gray-300  w-120   rounded-full"></div>
      </div>
      <HomePageII></HomePageII> <HomePageII></HomePageII>{" "}
    </>
  );
}
