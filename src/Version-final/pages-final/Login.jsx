import React, { useState } from "react";
import Fb from "../../assets/images/facebook.png";
import Gg from "../../assets/images/googleR.png";
import In from "../../assets/images/linkedin.png";
import Git from "../../assets/images/github.png";
import InputField from "../../Input";
import SocialIcons from "../../Version-final/Composent-final/SocialIcons";
import DividerWithText from "../../Version-final/Composent-final/DividerWithText";
import CustomButton from "../../Version-final/Composent-final/CustomButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  const socialIcons = [
    { image: Gg, alt: "Google", link: "#" },
    { image: Fb, alt: "Facebook", link: "#" },
    { image: In, alt: "Instagram", link: "#" },
    { image: Git, alt: "GitHub", link: "#" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const data3 = {
      username: email,
      password: password,
    };

    console.log('JSON à envoyer : ', data3); // Affichez le JSON que vous envoyez pour le débogage

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data3),
      });


      if (response.ok) {
        const tokens = await response.json();

        localStorage.setItem('refreshToken', tokens['refresh-token']);
        localStorage.setItem('accessToken', tokens['access-token']);
        localStorage.setItem('id', tokens['id'])

        localStorage.setItem('Login', true)

        console.log("refreshToken = " + localStorage.getItem('refreshToken'))
        console.log("accessToken = " + localStorage.getItem('accessToken'))
        console.log("id = " + localStorage.getItem('id'))

        // Stocker le token dans le local storage

        // Naviguer vers une autre page, par exemple la page d'accueil
        navigate("/")


      } else {
        // Gérer les erreurs ici, par exemple afficher un message à l'utilisateur
        console.error('Erreur lors de la connexion : ', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête : ', error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-96 w-full space-y-8">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-gray-800">
              Se connecter avec
            </h2>
          </div>

          <SocialIcons icons={socialIcons} />

          <DividerWithText text="ou" />

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div className="mb-5">
                <InputField
                  id="email-address"
                  label="Adresse email ou pseudo"
                  type="email"
                  label_spaceinput="4"
                  autoComplete="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <InputField
                  id="password"
                  label="Mot de passe"
                  label_spaceinput="2"
                  type="password"
                  autoComplete="current-password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 font-medium block text-sm text-gray-500"
                >
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/Sign_Up"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Vous n'avez pas de compte ?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-base px-6 py-3 font-roboto"
              >
                Se connecter{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
