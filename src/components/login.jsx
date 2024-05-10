import React from 'react'
import Fb from '../icons/facebook.png'
import Gg from '../icons/google.png'
import In from '../icons/linkedin.png'
import Git from '../icons/git.png'
import { Link } from 'react-router-dom' 


export default function login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-96 w-full space-y-8">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-gray-800">Se connecter avec</h2>
            </div>
            <div className="flex justify-center p-0">
  <a href="#" className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md mr-14">
    <img src={Gg} alt='Google' className="w-7 h-7" />
  </a>
  <a href="#" className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md mr-14">
    <img src={Fb} alt='Facebook' className="w-7 h-7" />
  </a>
  <a href="#" className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md mr-14">
    <img src={In} alt='Instagram' className="w-7 h-7" />
  </a>
  <a href="#" className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-md">
    <img src={Git} alt='GitHub' className="w-7 h-7" />
  </a>
</div>

            <div className="flex items-center justify-center">
  <div className="border-b border-gray-300 w-full"></div>
  <div className="mx-4  text-gray-600 font-medium">ou</div>
  <div className="border-b border-gray-300 w-full"></div>
</div>

            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
              <div>
  <label htmlFor="email-address" className="block text-base font-medium text-gray-600">Adresse email ou pseudo</label>
  <input id="email-address" name="email" type="email" autoComplete="email" required className="mt-2 appearance-none rounded-2xl relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
</div>
<div className="mt-6">
  <label htmlFor="password" className="mt-5 block text-base font-medium text-gray-600">Mot de passe</label>
  <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-2 appearance-none rounded-2xl relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
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
    Mot de passe oublié ?
  </Link>
</div>
              </div>
    
              <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-blue-100 text-base py-3 font-medium px-6 rounded-full">
  Se connecter
</button>

              </div>
            </form>
          </div>
        </div>
      );
}
