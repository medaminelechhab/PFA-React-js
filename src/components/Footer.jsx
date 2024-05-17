import React from 'react';
import GooglePlay from '../icons/playstore.png'
import AppleStore from '../icons/app-store.png'
import blogger from '../icons/blogger.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div className="">
            
            <ul>
            <h4 className="text-white text-lg font-medium mb-4">Liens utiles</h4>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Aide et FAQ</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Nos tarifs</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Comment ça marche ?</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Conditions d'utilisation</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Politique de confidentialité</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Mentions légales</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Boîte à outils</a></li>
            </ul>
          </div>
          <div className="">
            <div className='flex items-center mb-4'>
            <h4 className="text-white text-lg font-medium mr-1">En direct du blog</h4>
            <img className='size-5' src={blogger} alt=''/>
            </div>
            <ul>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Comment percer sur Instagram en 2024 : les 5 conseils clés</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Comment percer sur LinkedIn en 6 étapes ?</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Le grand guide des tailles d'images pour Tumblr</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Ouvrir un compte professionnel, le meilleur choix pour un micro-entrepreneur</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">10 nouveaux outils à tester en mai 2024</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Interview de Charlotte Delattre : Community Manager sur Codeur.com</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
            <ul>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Nous contacter</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">À propos de nous</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Partenaires</a></li>
              <li className='mb-3'><a href="#" className="hover:text-white font-medium">Portage salarial</a></li>
            </ul>
            <div className="flex mt-4">
              <a href="#" className="mr-4 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="mr-4 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mr-4 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8 mt-9"></div>
        <div className="flex justify-between mt-10 text-center">
          <p className='flex text-sm'>© 2006 - 2024 Codeur.com est la première place de marché des freelances francophones.</p>
          <div className="flex">
            <a href="#" className="flex mr-4 border border-gray-400 bg-black rounded-md px-2.5 py-0">
                <img className='size-7 mr-2 mt-1.5' src={AppleStore} alt="App Store" />             
            <div className='flex flex-col'>
            <p className='text-xs'>Télécharger dans</p>
            <p className='font-medium text-base text-white'>l'App Store</p>
            </div>
            </a>
            <a href="#" className="flex mr-4 border border-gray-400 bg-black rounded-md px-2.5 py-0">
                <img className='size-7 mr-2 mt-1.5' src={GooglePlay} alt="App Store" />             
            <div className='flex flex-col'>
            <p className='text-xs'>disponible sur</p>
            <p className='font-medium text-base text-white'>Google Play</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
