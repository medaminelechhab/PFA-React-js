import React, { useState, useEffect } from 'react';
import Apple from '../icons/Apple.png'
import Google from '../icons/googleR.png'
import Input from './composants/Input';
import DividerWithText from './composants/DividerWithText';
import CustomButton from './composants/CustomButton';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: ''
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Effectue une requête GET à l'API REST Countries pour obtenir la liste des pays
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Extrait les noms des pays de la réponse et les stocke dans un tableau
        const countryNames = data.map(country => country.name.common);
        setCountries(countryNames);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-5xl font-normal text-gray-900 font-mirza">Créez votre compte</h2>
        </div>

        <div className="flex">
            <a href='#'>
            <div className='relative border border-black rounded-full px-9 py-2.5 flex items-center mr-7'>
      <img src={Apple} alt='' className='w-3 h-3 mr-1.5'/>
    <span className='text-sm font-medium font-roboto'>Connecter avec Apple</span>
  </div>
            </a>
            <a href='#'>
            <div className='relative border border-blue-500 bg-blue-500 rounded-full px-9 py-2.5 flex items-center'>
    <div className="absolute bg-white rounded-full h-10 w-10 flex items-center justify-center left-0 top-1/2 transform -translate-y-1/2">
      <img src={Google} alt='' className='w-4 h-4'/>
    </div>
    <span className='text-sm ml-8 text-white font-medium font-roboto'>Connecter avec Google</span>
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
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
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
          autoComplete="country"
          required
          value={formData.country}
          onChange={handleChange}
          >
          <option value="">Sélectionnez un pays</option>
          {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
          ))}
          </Input>

          </div>

          <div className='flex'>
            <input type='checkbox' className="border-2 h-6 w-6 mr-2 accent-green-600"/>
            <label className='text-base text-black font-normal font-roboto'>M'envoyer des e-mails avec conseils pour trouver talent adapté.</label>
          </div>

          <div className='flex'>
            <input type='checkbox' className='h-10 w-10 mr-2 accent-green-600'/>
            <label className='text-base text-black font-normal font-roboto'>Je comprends et j'accepte les conditions d'utilisation, le contrat utilisateur et la politique de confidentialité.</label>
          </div>

          <div className='flex justify-center'>
          <CustomButton
        text="Créer un compte"
        bgColor="bg-green-600"
        hoverBgColor="hover:bg-green-500"
        textColor="text-white"
        fontSize="text-base"
        onClick={() => {
          // Logique d'inscription
        }}
      />
          </div>
          <div className='flex justify-center'>
            <p className='font-roboto'>Vous avez déjà un compte?</p>&nbsp;<a href='/Login' className='text-base font-medium text-green-600 font-roboto'>Connectez-vous</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
