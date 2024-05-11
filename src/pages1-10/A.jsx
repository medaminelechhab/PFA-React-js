import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import { useState } from "react";
import Footer from "./Footer";
const pageData = {
  1: {
    titre: "How would you like to tell us about yourself?",
    sousTitre:
      "We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.",
    message: "Create your profile  ",
    nbr_page: 1,
  },
};
export default function A() {
  const [x, set] = useState("1/2");

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSign />
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24">
          <Qct
            titre={pageData[1].titre}
            sousTitre={pageData[1].sousTitre}
            message={pageData[1].message}
            nbr_page={pageData[1].nbr_page}
          />
        </div>
        <div className="rounded-full border-2 border-green-700 mt-24 w-100 items-center ml-40 h-10 flex justify-center">
          <div className="text-center text-green-700 font-semibold">
            Fill out manually(15) min
          </div>
        </div>{" "}
      </div>
      <Footer x="full"></Footer>
    </div>
  );
}
