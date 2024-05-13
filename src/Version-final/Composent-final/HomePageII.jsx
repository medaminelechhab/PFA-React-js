import React from "react";
import Cartes from "../../assets/images//cartes-missions.webp";

const HomePageII = () => {
  return (
    <div className="flex justify-center items-center w-full mt-12">
      <div className="w-1/3 flex justify-end pr-8">
        <img
          src={Cartes}
          alt="Test Image"
          className="w-10/12 h-auto object-cover"
        />{" "}
        {/* Ajustez la classe ou ajoutez des styles ici */}
      </div>
      <div className="w-1/2 px-40 flex flex-col justify-center items-center pl-8">
        <h2 className="font-bold text-2xl lg:text-1xl mb-4">
          Quelles missions confier à un freelance&nbsp;?
        </h2>
        <p className="text-base mb-5">
          Vous pouvez confier toutes sortes de missions à un freelance, quels
          que soient les besoins et le secteur d'activité de votre entreprise.
        </p>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 items-center justify-center w-12 h-20 rounded-full bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-11 bg-green-400 rounded-full h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Développement</h3>
              <p className="text-base mt-1 lg:mt-1">
                Vous êtes à la recherche de compétences en informatique sur une
                technologie précise&nbsp;? Vous trouverez forcément le
                développeur qu'il vous faut sur Codeur.com&nbsp;!
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 items-center justify-center w-14 h-20 rounded-full bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-11 bg-green-400 rounded-full h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Graphisme &amp; webdesign</h3>
              <p className="text-base mt-1 lg:mt-2">
                Vous avez besoin d'un <a href="/creation-logos">nouveau logo</a>{" "}
                et d'un{" "}
                <a href="/creation-sites-internet">nouveau site internet</a>
                &nbsp;? Confiez des missions à un graphiste freelance et à un
                webdesigner.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 items-center justify-center w-12 h-20 rounded-full bg-primary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-11 bg-green-400 rounded-full h-11"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Commerce</h3>
              <p className="text-base mt-1 lg:mt-2">
                Vous cherchez à développer l'activité de votre entreprise&nbsp;?
                Trouvez un commercial indépendant et confiez-lui la mission de
                recruter des leads.
              </p>
            </div>
          </div>
        </div>
        <br />
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-20 rounded-full">
          Voir tout les messions{" "}
        </button>
      </div>
    </div>
  );
};

export default HomePageII;
