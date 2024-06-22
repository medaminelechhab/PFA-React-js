import React, { useEffect, useState } from 'react';
import user from '../../assets/images/user.png';
import calendar from '../../assets/images/calendar.png';
import euro from '../../assets/images/euro.png';
import { Link, useParams } from 'react-router-dom';
import apiService from '../Service/apiService';
import { useNavigate } from 'react-router-dom';
function Concept() {
    const { id } = useParams();
    const navig = useNavigate()
    const [data, setData] = useState({
        titre: '',
        budget: '',
        besoin: '',
        services: [],
        image: [],
    });
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService(`http://localhost:8089/annonces/${id}`, 'GET');
                setData(response);
            } catch (error) {
                console.error('Erreur lors de la récupération des données : ', error);
            }
        };

        fetchData();
    }, [id]);

    const time = new Date();
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < data.image.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const images = data.image || [];

    const [open, setOpen] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault(); // Correction ici
        const data3 = {
            price: parseFloat(price), // Conversion en float pour s'assurer que c'est un nombre
            description: description,
            idUser: 1,
            annonce: {
                id: data.id // ID de l'annonce à laquelle l'intérêt est associé
            }
        };

        console.log('JSON à envoyer : ', data3); // Affichez le JSON que vous envoyez pour le débogage


        apiService('http://localhost:8089/api', 'POST', data3);


        navig("/")


    }

    return (
        <div className='flex'>
            <div className='ml-24 my-20  border rounded-lg border-gray-300 w-6/12 p-6 shadow-md'>
                <h1 className='text-4xl font-serif1 mb-2 ml-2'>{data.titre}</h1>
                <div className='flex items-center'>
                    <p className='text-gray-600 font-semibold ml-2'>
                        <span className='text-5xl text-green-500 mr-1'>.</span>
                        Ouvert · {data.budget} · {data.id + 12} · · 17 interactions
                    </p>
                </div>
                <div className='flex justify-around'>
                    <button
                        onClick={() => setOpen(true)}
                        className='mt-4 bg-green-500 px-12 hover:bg-green-700 text-white font-semibold text-sm py-4 rounded-full'
                    >
                        Déposer un Devis
                    </button>
                    <Link
                        to='/Add_Pub'
                        className='mt-4 border-2 border-gray-500 text-black hover:bg-green-700 font-semibold text-sm py-4 px-6 rounded-full'
                    >
                        Publier un projet similaire
                    </Link>
                </div>
                <div className='border-t mt-6 mb-4 border-gray-200'></div>
                <p className='text-gray-600 text-sm font-medium mb-2 text-justify'>{data.besoin}</p>
                <div className='flex items-center mb-3 pt-10'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={euro} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Budget indicatif :</h1>
                    <h1 className='ml-1 font-bold text-gray-600 text-base'>{data.budget}</h1>
                </div>
                <div className='flex items-center mb-3'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={calendar} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Publication :</h1>
                    <h1 className='ml-1 font-bold text-gray-600 text-base'>{formattedTime} H</h1>
                </div>
                <div className='flex items-center mb-3'>
                    <div className='flex justify-center items-center border rounded-full size-8 bg-blue-100'>
                        <img className='size-4' src={user} alt='' />
                    </div>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Profils recherchés :</h1>
                    <div className='ml-2 flex flex-wrap space-x-2 text-justify mt-16 '>
                        {data.services.map((service, index) => (
                            <div key={index} className='mb-2'>
                                <h1 className='font-bold text-gray-600 text-base'>{service.task}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Affichage de la galerie d'images */}
                <div className='mt-6'>
                    <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Image de Probleme :</h1>
                    <div className='relative px-48'>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className={`object-contain w-full h-96 rounded-lg shadow-lg mb-4 ${index !== currentImageIndex ? 'hidden' : ''
                                    }`}
                            />
                        ))}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={previousImage}
                                    className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-300'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M15 19l-7-7 7-7'
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-300'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5l7 7-7 7'
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Section pour le formulaire de soumission de devis */}

            </div>
            <div>
                {open && (
                    <div className='ml-16 mt-40 shadow-2xl border-2 border-green-500 w-[500px] rounded-lg'>
                        <h2 className='text-center mt-5 text-2xl font-serif1 mb-6 text-gray-800'>
                            Proposez votre prix
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4 ml-8'>
                                <label htmlFor='price' className='block text-gray-700 font-semibold mb-2'>
                                    Proposez un prix :
                                </label>
                                <input
                                    type='number'
                                    id='price'
                                    name='price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className='w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                    placeholder='Entrez votre prix'
                                />
                            </div>
                            <div className='mb-6 ml-8'>
                                <label htmlFor='description' className='block text-gray-700 font-semibold mb-2'>
                                    Description :
                                </label>
                                <textarea
                                    id='description'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows='4'
                                    className='w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                    placeholder='Entrez une description'
                                ></textarea>
                            </div>
                            <div className='flex justify-end mr-3 mb-5 '>
                                <button
                                    type='submit'
                                    className='px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                >
                                    Soumettre
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Concept;
