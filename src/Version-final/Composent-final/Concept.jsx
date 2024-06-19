import React, { useState } from 'react'

import user from '../../assets/images/user.png'
import calendar from '../../assets/images/calendar.png'
import euro from '../../assets/images/euro.png'
import { Link } from 'react-router-dom'

function Concept() {
    const [open, setopen] = useState(false)
    return (
        <div className=' flex '>

            <div className='ml-24 my-20  border rounded-lg border-gray-300 w-6/12 p-6  shadow-md'>




                <h1 className='text-4xl font-serif1 mb-2 ml-2'>   Concept de code en Trois dimensions</h1>
                <div className='flex items-center'>

                    <p className='text-gray-600  font-semibold ml-2'><span className='text-5xl text-green-500 mr-1'>.</span>Ouvert
                        ·
                        Moins de 500 €
                        ·
                        9 offres
                        ·
                        130 vues
                        ·
                        17 interactions  </p>
                </div>


                <div className=' flex justify-around'>


                    <button onClick={() => { setopen(true) }} className="mt-4 bg-green-500 px-12 hover:bg-green-700 text-white font-semibold text-sm py-4  rounded-full">
                        Dépot un Devis                </button>
                    <Link to={"/Add_Pub"} className="mt-4 border-2 border-gray-500 text-black hover:bg-green-700  font-semibold text-sm py-4 px-6 rounded-full">
                        Publier un projet similaire
                    </Link>
                </div>


                <div className='border-t mt-6 mb-4 border-gray-200'></div>

                <p className='text-gray-600 text-sm font-medium mb-2 text-justify'>Je souhaite proposer, à des programmateurs, une idée novatrice qui peut être très utile dans de nombreux secteurs d'activité comme la médecine, la modélisation, les jeux vidéos ou bien la cryptographie.</p>
                <p className='text-gray-600 mb-2 text-sm font-medium text-justify'>Cette dernière consiste à créer un code en trois dimensions. Un code (qui peut être lu de haut en bas, de gauche à droite et en profondeur) ouvre de nouvelles possibilités dans les domaines cités et offre ainsi une flexibilité nouvelles. Ce qui améliore la compréhension des phénomènes complexes et des relations entre les données. Je recherche donc des programmateurs qui, visualisent les différents avantages de ce type de code. Je souhaite donc collaborer avec vous pour créer de nouveaux codes afin d'améliorer la modélisation 3D des données médicales par exemple ou autre. Je souhaite surtout proposer l'idée car d'après ChatGPT cela peut être révolutionnaire. Exemple :</p>


                <div className='flex items-center mb-3 pt-10'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={euro} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Budget indicatif : </h1>
                    <h1 className='ml-1 font-bold text-gray-600 text-base'>500 € à 1 000 €</h1>
                </div>

                <div className='flex items-center mb-3'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={calendar} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Publication : </h1>
                    <h1 className='ml-1 font-bold text-gray-600 text-base'>20 mai 2024 à 21h08</h1>
                </div>

                <div className='flex items-center mb-3'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={user} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Profils recherchés : </h1>
                    <h1 className='ml-1 font-bold text-gray-600 text-base'> Développeur spécifique, Développeur Machine Learning</h1>
                </div>

            </div >
            {open ? (<div className="  ml-16  mt-40 shadow-2xl border-2 border-green-500   w-[500px] h-full   rounded-lg   ">
                <h2 className="  text-center mt-5 text-2xl  font-serif1 mb-6 text-gray-800">Proposez votre prix</h2>
                <form>
                    <div className="mb-4 ml-8">
                        <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
                            Proposez un prix:
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Entrez votre prix"
                        />
                    </div>
                    <div className="mb-6  ml-8">
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Entrez une description"
                        ></textarea>
                    </div>
                    <div className="flex justify-end mr-3 mb-5 ">
                        <button
                            type="submit"
                            className="px-6 py-2  bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>) : (null)}


        </div>



    )
}

export default Concept