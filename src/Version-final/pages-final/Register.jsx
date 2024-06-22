import React, { useState, useEffect, useContext } from "react";
import Apple from "../../assets/images/Apple.png";
import Google from "../../assets/images/googleR.png";
import Input from "../../Input";
import DividerWithText from "../../Version-final/Composent-final/DividerWithText";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Auth/ProfileContext";

const Register = () => {
  const { Role } = useContext(ProfileContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    country: "", // Utilisation de "country" au lieu de "Pays"
    role: "client" // Définition du rôle par défaut
  });

  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Données à envoyer : ', formData);

    try {
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registre")
      }
      if (response.status == 409) {
        alert("user deja excite")
      }



      // Gérer la réponse du serveur, par exemple, enregistrer un token
      // localStorage.setItem('token', result.token);

      // Naviguer vers une autre page après l'inscription
      // navigate('/home');

    } catch (error) {
      console.error('Erreur lors de l\'envoi de la requête : ', error);
    }
    if (Role == "client") {
      navigate('/Login');
    } else {
      navigate('/Sign_Up/Register/freelance/1');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <div>
          <h2 className="text-center text-5xl font-serif text-gray-900 font-mirza">
            Sign up to hire talent
          </h2>
        </div>

        <div className="flex">
          <a href="#">
            <div className="relative border border-black rounded-full px-9 py-2.5 flex items-center mr-7">
              <img src={Apple} alt="" className="w-3 h-3 mr-1.5" />
              <span className="text-sm font-medium font-roboto">
                Connecter avec Apple
              </span>
            </div>
          </a>
          <a href="#">
            <div className="relative border border-blue-500 bg-blue-500 rounded-full px-9 py-2.5 flex items-center">
              <div className="absolute bg-white rounded-full h-10 w-10 flex items-center justify-center left-0 top-1/2 transform -translate-y-1/2">
                <img src={Google} alt="" className="w-4 h-4" />
              </div>
              <span className="text-sm ml-8 text-white font-medium font-roboto">
                Connecter avec Google
              </span>
            </div>
          </a>
        </div>

        <DividerWithText text="ou" font="font-roboto" />

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex space-x-4">
            <div className="w-1/2 rounded-md">
              <Input
                label="Prenom"
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="w-1/2">
              <Input
                label="Nom"
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Input
              label="Adresse email"
              id="username"
              name="username"
              type="email"
              autoComplete="email"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Mot de passe"
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe (8 caractères ou plus)"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Pays"
              id="country"
              name="country"
              type="select"
              type_input="select"
              required
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un pays</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Input>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              className="border-2 h-6 w-6 mr-2 accent-green-600"
            />
            <label className="text-base text-black font-normal font-roboto">
              M'envoyer des e-mails avec conseils pour trouver talent adapté.
            </label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              className="h-10 w-10 mr-2 accent-green-600"
            />
            <label className="text-base text-black font-normal font-roboto">
              Je comprends et j'accepte les conditions d'utilisation, le contrat
              utilisateur et la politique de confidentialité.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              className="text-white bg-green-600 hover:bg-green-500 focus:outline-none font-medium rounded-full text-base px-6 py-3 font-roboto"
              type="submit"
            >
              Créer un compte
            </button>
          </div>

          <div className="flex justify-center">
            <p className="font-roboto">Vous avez déjà un compte?</p>&nbsp;
            <a
              href="/Login"
              className="text-base font-medium text-green-600 font-roboto"
            >
              Connectez-vous
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
