import Items from "../Items";
import Qct from "../Qct";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
  return (
    <div className="flex flex-col h-auto">
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24">
          <Qct
            titre={pageData[1].titre}
            sousTitre={pageData[1].sousTitre}
            message={pageData[1].message}
            nbr_page={pageData[1].nbr_page}
          />
        </div>
        <Link to="/Sign_Up/Refister/freelance/2">
          <div className="rounded-full border-2 border-green-700 mt-24 w-100 items-center ml-40 h-10 flex justify-center">
            <div className="text-center text-green-700 font-semibold">
              Fill out manually(15) min
            </div>
          </div>{" "}
        </Link>
      </div>
      <Footer prog={1}></Footer>
    </div>
  );
}
