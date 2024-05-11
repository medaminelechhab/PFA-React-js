import React from 'react'
import Fb from '../icons/facebook.png'
import Gg from '../icons/googleR.png'
import In from '../icons/linkedin.png'
import Git from '../icons/github.png'
import { Link } from 'react-router-dom' 
import InputField from './composants/InputField'
import SocialIcons from './composants/SocialIcons'
import DividerWithText from './composants/DividerWithText'
import CustomButton from './composants/CustomButton'


export default function login() {

  const socialIcons = [
    { image: Gg, alt: 'Google', link: '#' },
    { image: Fb, alt: 'Facebook', link: '#' },
    { image: In, alt: 'Instagram', link: '#' },
    { image: Git, alt: 'GitHub', link: '#' },
  ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-96 w-full space-y-8">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-gray-800">Se connecter avec</h2>
            </div>
            
            <SocialIcons icons={socialIcons} />

            <DividerWithText text="ou" />

            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
              <div className='mb-4'>
              <InputField
        id="email-address"
        label="Adresse email ou pseudo"
        type="email"
        autoComplete="email"
        placeholder=""
      />
</div>
<div>
<InputField
        id="password"
        label="Mot de passe"
        type="password"
        autoComplete="current-password"
        placeholder=""
      />
</div>

              </div>
    
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 font-medium block text-sm text-gray-500">
                  Se souvenir de moi
                  </label>
                </div>
    
                <div className="text-sm">
  <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
    Vous n'avez pas de compte ?
  </Link>
</div>
              </div>
    
              <div>
              <CustomButton
        text="Se connecter"
        bgColor="bg-blue-500"
        hoverBgColor="bg-blue-700"
        textColor="text-white"
        fontSize="text-base"
        onClick={() => {
          // Logique de connexion
        }}
      />
              </div>
            </form>
          </div>
        </div>
      );
}
