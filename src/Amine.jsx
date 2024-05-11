import Items from "./Items";
import Qct from "./Qct";
import NavbarSign from "./NavbarSign";
import NavBar from "../src/Version-final/Composent-final/NavBar";

import HomePage from "../src/Version-final/pages-final/HomePage";

export default function Amine() {
  return (
    <>
      <div className="">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="">
          <HomePage></HomePage>
        </div>
      </div>
    </>
  );
}
