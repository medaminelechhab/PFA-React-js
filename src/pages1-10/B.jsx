import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import { useState } from "react";
import Footer from "./Footer";
import Input from "../Input";
const pageData = {
  1: {
    titre: "How would you like to tell us about yourself?",
    sousTitre:
      "We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.",
    message: "Create your profile  ",
    nbr_page: 1,
  },
};
export default function B() {
  const [x, set] = useState("1/2");

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSign />
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24 space-y-8">
          <div>
            {" "}
            <Qct
              titre={pageData[1].titre}
              sousTitre={pageData[1].sousTitre}
              message={pageData[1].message}
              nbr_page={pageData[1].nbr_page}
            />
          </div>
          <div className="max-w-128">
            {" "}
            <Input
              desgine_label="  font-roboto"
              label="Your professional role"
              id="Your professional role"
              name="Your professional role"
              type="text"
              placeholder="Software Engineer | Javascript  | iOS"
              required
            />
          </div>
        </div>
      </div>
      <Footer
        x="3"
        nbr_page="2"
        secend_button="thenks for add experience"
      ></Footer>
    </div>
  );
}
