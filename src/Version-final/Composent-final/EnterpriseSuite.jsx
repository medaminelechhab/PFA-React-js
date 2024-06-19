import React from "react";
import ecp from "../../assets/images/suit.jpg";

const EnterpriseSuite = () => {
  return (
    <div className="pl-32 pr-32   rounded-3xl">
      <div className="flex flex-col  md:flex-row items-center ">
        <div className="w-3/5 p-6 bg-teal-800 rounded-s-2xl">
          <div className="text-white mt-6">
            <div className="mb-4">
              <p className="text-2xl font-semibold">Enterprise Suite</p>
            </div>
            <div className="mb-4">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold">
                This is how
                <br />
                <span className="text-green-300 font-serif">
                  good companies
                  <br />
                  find good company.
                </span>
              </h1>
            </div>
            <div className="mb-4 max-w-[600px]">
              <p>
                Access the top 1% of talent on Upwork, and a full suite of
                hybrid workforce management tools. This is how innovation works
                now.
              </p>
            </div>
            <div className="mb-4">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Skills.svg"
                    alt="Skills Icon"
                    className="w-6 h-6 mr-3"
                  />
                  Access expert talent to fill your skill gaps
                </li>
                <li className="flex items-start">
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Briefcase.svg"
                    alt="Briefcase Icon"
                    className="w-6 h-6 mr-3"
                  />
                  Control your workflow: hire, classify and pay your talent
                </li>
                <li className="flex items-start">
                  <img
                    src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/Support.svg"
                    alt="Support Icon"
                    className="w-6 h-6 mr-3"
                  />
                  Partner with Upwork for end-to-end support
                </li>
              </ul>
            </div>
            <div>
              <a
                href="/enterprise/"
                className="bg-white hover:bg-green-500 text-teal-700 py-2 px-4 rounded-md inline-block"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/5 ltr ">
          <img
            src={ecp}
            alt="Enterprise Image"
            className="w-[900px] h-[504px] rounded-br-2xl rounded-tr-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSuite;
