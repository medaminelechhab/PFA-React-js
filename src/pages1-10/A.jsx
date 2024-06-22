import Items from "../Items";
import Qct from "../Qct";
import Footer from "./Footer";
import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
const pageData = {
  1: {
    titre: "How would you like to tell us about yourself?",
    sousTitre:
      "We need to get a sense of your education, experience and skills. It’s quickest to import your information — you can edit it before your profile goes live.",
    message: "Create your profile  ",
    nbr_page: 1,
  },
};
export default function A() {
  return (
    <div className="flex flex-col h-auto">
      <div className="flex-grow pl-2 pt-16">
        <div className="px-24">
          <Qct
            titre={pageData[1].titre}
            sousTitre={pageData[1].sousTitre}
            message={pageData[1].message}
            nbr_page={pageData[1].nbr_page}
          />
        </div>
        <Link to="/Sign_Up/Register/freelance/2">
          <div className="rounded-full border-2 border-green-700 mt-24 w-[800px] items-center ml-36 h-10 flex justify-center">
            <div className="text-center text-green-700 font-semibold">
              Fill out manually(15) min
            </div>
          </div>{" "}
        </Link>
      </div>
      <Footer prog={1}></Footer>
    </div>
  );
}
/*



import React, { useState, useEffect } from 'react';
import star from '../../assets/images/amine1.jpg';
import userpr from '../../assets/images/amine1.jpg';
import location from '../../assets/images/amine1.jpg';
import message from '../../assets/images/amine1.jpg';
import order from '../../assets/images/amine1.jpg';
import cam from '../../assets/images/amine1.jpg';
import { useParams } from 'react-router-dom';

function JobDesc() {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedd, setIsExpandedd] = useState(false);
  const { id } = useParams();
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
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleReadMoree = () => {
    setIsExpandedd(!isExpandedd);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Remplacez par votre token Bearer
        const response = await fetch(`http://localhost:8082/profiles/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setItem(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  console.log(item);

  return (
    <div className="ml-14 pt-12 max-w-[700px] font-semibold font-ma mt-16">
      <h1 className="text-3xl">
        Bonjour, je suis   {item.professional || "Mon expérience dans la construction de maisons assure des applications full-stack solides et adaptées à vos besoins spécifiques"} et disponible pour tout type de travaux de construction. N'hésitez pas à me contacter pour toute demande.
      </h1>
      <div className="flex mt-5">
        <img src={star} alt="star" className="size-5 mr-1" />
        <h1 className="mr-1">{item.evaluation || 5}.0</h1>
        <h1 className="text-gray-500">({item.ordersCompleted || 30})</h1>
      </div>
      <div className="flex mt-6">
        <img src={item.photoProfile} className="border rounded-full size-32 mr-4" />
        <div>
          <h1 className="text-2xl font-semibold"> #{item.id || 'Mehdi B'}</h1>
          <div className="flex">
            <img src={location} alt="location" className="size-3.5 mt-0.5 mr-2" />
            <h1 className="text-gray-700 text-sm">{item.country || 'Morocco'}</h1>
            <img src={message} alt="message" className="size-3.5 mt-0.5 ml-2" />
            <p className='ml-2 text-sm'>
              I Speak: {item.languages ? item.languages.join(', ') : 'French, Arabic, English'}
            </p>
            <img src={order} alt="order" className='size-3.5 mt-0.5 ml-2 mr-2' />
            <h1 className='text-sm text-gray-700'>{item.ordersCompleted || 30} orders completed</h1>
          </div>
          <div className='flex'>
            <div className='border rounded-md w-28 cursor-pointer h-9 mt-2 text-gray-700 text-base flex items-center justify-center mr-4 hover:bg-gray-200'>Contact me</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className='text-base font-normal'>
          {isExpanded ? item.textera
            : `${item.textera
            }`}
        </h1>

      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-36 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className='flex mt-8'>
        {item.skill && item.skill.map((skill, index) => (
          <p className='mr-4 border rounded-full font-normal text-black text-base bg-gray-200 py-1 px-2' key={index}>{skill}</p>
        ))}
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Expériences</h2>
        <table className='table-auto w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border px-4 py-2'>Titre</th>
              <th className='border px-4 py-2'>Entreprise</th>
              <th className='border px-4 py-2'>Location</th>
              <th className='border px-4 py-2'>Description</th>
            </tr>
          </thead>
          <tbody>
            {item.experience && item.experience.map((item, index) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{item.title}</td>
                <td className='border px-4 py-2'>{item.company}</td>
                <td className='border px-4 py-2'>{item.location}</td>
                <td className='border px-4 py-2'>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-36 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-bold mb-4'>Expériences</h2>
        <table className='table-auto w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border px-4 py-2'>school</th>
              <th className='border px-4 py-2'>degree</th>
              <th className='border px-4 py-2'>fieldOfStudy</th>
              <th className='border px-4 py-2'>Description</th>
            </tr>
          </thead>
          <tbody>
            {item.educations && item.educations.map((educations, index) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{educations.school}</td>
                <td className='border px-4 py-2'>{educations.degree}</td>
                <td className='border px-4 py-2'>{educations.fieldOfStudy}</td>
                <td className='border px-4 py-2'>{educations.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="h-[3px]  px-36 mt-11 bg-green-600  w-120   rounded-full"></div>
      </div>
      <div className='mt-6'>
        <h1 className='ml-5 text-gray-600 text-sm font-semibold'>Image de Prbleme :</h1>
        <div className='relative px-48'>
          {item.collectionPhotosProject.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`object-contain w-full h-96 rounded-lg shadow-lg mb-4 ${index !== currentImageIndex ? 'hidden' : ''
                }`}
            />
          ))}
          {item.collectionPhotosProject.length > 1 && (
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
    </div >
  );
}

export default JobDesc;
*/