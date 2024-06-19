import Items from "./Items";
import Qct from "./Qct";
import NavbarSign from "./NavbarSign";
import NavBar from "../src/Version-final/Composent-final/NavBar";

import HomePage from "../src/Version-final/pages-final/HomePage";
import Caracteristiques from "./Version-final/Composent-final/Caracteristiques";
import HomePageII from "./Version-final/Composent-final/HomePageII";
import Carac from "./Version-final/pages-final/Carac";
import Qa from "./Version-final/pages-final/Qa";
import EnterpriseSuite from "./Version-final/Composent-final/EnterpriseSuite";
import Footer2 from "./Version-final/Composent-final/Footer2";

export default function Amine() {
  return (
    <>
      <HomePage></HomePage>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-0.75  px-8 mt-[200px] bg-green-600  w-120   rounded-full"></div>
      </div>
      <Caracteristiques></Caracteristiques>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-8 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className="pt-8">
        <EnterpriseSuite></EnterpriseSuite>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-8 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className="pt-8  px-24">
        <HomePageII></HomePageII>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-8 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className="pt-12  ">
        <Carac></Carac>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-8 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className="pt-12  ">
        <Qa></Qa>
      </div>
      <div className="pt-16 ">
        <Footer2></Footer2>
      </div>
    </>
  );
}
