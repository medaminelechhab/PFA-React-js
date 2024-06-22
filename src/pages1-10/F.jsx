import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Items from "../Items";
import Qct from "../Qct";
import NavbarSign from "../NavbarSign";
import Footer from "./Footer";
import Input from "../Input";
import { ProfileContext } from "../Version-final/Auth/ProfileContext";
const pageData = {
  1: {
    titre: "Great. Now write a bio to tell the world about yourself.",
    sousTitre:
      "Help people get to know you at a glance. What work do you do best? Tell them clearly, using paragraphs or bullet points. You can always edit later; just make sure you proofread now.",
    nbr_page: 6,
  },
};
export default function F() {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State for the error message
  const { Textera, SetTextera } = useContext(ProfileContext);
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (Textera.length === 0) {
      setError("This field is required.");
    } else {
      setError("");
      navigate("/Sign_Up/Register/freelance/7");
    }
  };

  return (
    <div className="flex flex-col">
      <div className=" pl-2 pt-6 flex">
        <div className="px-24  w-1/2">
          <div>
            <Qct
              titre={pageData[1].titre}
              sousTitre={pageData[1].sousTitre}
              nbr_page={pageData[1].nbr_page}
            />
          </div>
          <div className="">
            <Input
              desgine_label="font-roboto "
              id="Your professional role"
              label_spaceinput="5"
              name="Your professional role"
              type="text"
              placeholder="Enter your top skills, experiences, and interests. This is one of the first things clients will see on your profile."
              required
              h={96}
              w={true}
              value={Textera}
              onChange={(e) => SetTextera(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Display error message */}
          </div>
        </div>
        <div className="ml-20">
          {" "}
          <div className=" flex justify-center items-center">
            <div className=" w-[400px] bg-white  border border-gray-200 shadow-2xl dark:border-gray-700 rounded-lg  p-6">
              <div className="mb-6 flex justify-center">
                <img
                  className="rounded-full w-32 h-32"
                  src="https://www.upwork.com/static/assets/FreelancerOnboardingNuxt/img/beard-man-avatar.37c405a.png"
                  alt="Avatar"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Marti G.</h3>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.142 3.813l1.782 4.802 4.927.275c.243.013.477.104.672.26.194.156.338.37.415.615.077.245.082.508.015.756a1.288 1.288 0 01-.391.633L16.726 14.4l1.282 4.993c.06.252.047.517-.038.76a1.285 1.285 0 01-.437.606c-.2.15-.439.234-.684.24a1.174 1.174 0 01-.693-.21L12 17.976 7.854 20.77a1.175 1.175 0 01-.69.214 1.178 1.178 0 01-.684-.233 1.283 1.283 0 01-.441-.599 1.36 1.36 0 01-.047-.757l1.272-4.972-3.826-3.268a1.288 1.288 0 01-.391-.633 1.349 1.349 0 01.015-.756 1.28 1.28 0 01.415-.615c.195-.156.429-.247.672-.26l4.927-.275 1.782-4.802c.092-.24.25-.446.454-.59a1.177 1.177 0 011.376-.001c.204.145.361.35.454.59z"
                  />
                </svg>
                <span className="text-gray-700 mr-4">5.0</span>
                <span className="text-gray-700 mr-4  "> $75.00/hr</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 20.2h-12c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v8c0 1.6-1.4 3-3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.7 13.9v-3m8.1 3v-3m-13 1.3h18m-7.6-8.4h-3c-.6 0-1 .4-1 1v1.4h5V4.8c0-.6-.4-1-1-1z"
                  />
                </svg>
                <span className="text-gray-700"> 14 Jobs</span>
              </div>
              <div className="testimonial-text">
                <p className="text-gray-700 mb-4">
                  I’m a developer experienced in building websites for small and
                  medium-sized businesses. Whether you’re trying to win work,
                  list your services, or create a new online store, I can help.
                </p>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700 mb-2">
                    Knows HTML and CSS3, PHP, jQuery, Wordpress, and SEO
                  </li>
                  <li className="text-gray-700 mb-2">
                    Full project management from start to finish
                  </li>
                  <li className="text-gray-700">
                    Regular communication is important to me, so let’s keep in
                    touch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        prog={6}
        secend_button="thanks for adding experience"
        onSecendButtonClick={handleButtonClick}
      />
    </div>
  );
}
