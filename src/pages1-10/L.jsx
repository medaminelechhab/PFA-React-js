import React, { useState } from 'react';
import Footer from './Footer';
import { storage, uploadBytes, ref, getDownloadURL } from '../../Firebase/firebase'; // Chemin vers votre fichier firebaseConfig.js
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProfileContext } from '../../src/Version-final/Auth/ProfileContext';
const L = () => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navig = useNavigate()

    const { photoProfile, json, setphotoProfile } = useContext(ProfileContext)
    const [error, setError] = useState(""); // State for the error message

    // Fonction pour gérer le chargement d'images
    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);

        const imagesArray = selectedImages.map((photoProfile) => ({
            file: photoProfile,
            src: URL.createObjectURL(photoProfile),
            alt: photoProfile.name,
        }));

        setImages(imagesArray);
        setCurrentImageIndex(0); // Réinitialiser l'index de l'image affichée à la première image

    };

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);


    };

    // Fonction pour passer à l'image précédente
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? photoProfile.length - 1 : prevIndex - 1
        );

    };

    const handleButtonClick = async () => {
        try {
            // Utilisation de Promise.all avec await pour attendre que toutes les images soient téléchargées
            const urls = await Promise.all(images.map(uploadImageToFirebase));

            // Mise à jour de l'état des images avec les URLs téléchargées
            setphotoProfile(urls);

            // Maintenant que les images sont téléchargées et l'état mis à jour, on peut afficher le console.log

        } catch (error) {
            console.error('Erreur lors de l\'envoi des images : ', error);
        }
    };
    const handleButtonClick2 = async () => {

        const token = localStorage.getItem('accessToken'); // Retrieve the token from local storage
        console.log("token  " + token)
        console.log("json  " + json)
        const json2 = {

            "photoProfile": "https://example.com/profile.jpg",
            "professional": "Software Engineer",
            "Experience": [
                {
                    "title": "Senior Software Developer",
                    "company": "Tech Solutions Inc.",
                    "location": "New York, USA",
                    "pays": "USA",
                    "startDate": "2018-06-01",
                    "endDate": "2021-09-30",
                    "description": "Lead a team of developers in building scalable applications."
                },
                {
                    "title": "Software Developer",
                    "company": "Digital Innovations Ltd.",
                    "location": "London, UK",
                    "pays": "UK",
                    "startDate": "2015-03-15",
                    "endDate": "2018-05-31",
                    "description": "Developed web applications using React.js and Node.js."
                }
            ],
            "Eduction": [
                {
                    "school": "University of Computer Science",
                    "degree": "Bachelor of Science",
                    "fieldOfStudy": "Computer Science",
                    "datesAttended": "2011-09-01",
                    "toDatesAttended": "2015-06-30",
                    "description": "Studied various programming languages and algorithms."
                },
                {
                    "school": "High School of Mathematics",
                    "degree": "High School Diploma",
                    "fieldOfStudy": "Mathematics",
                    "datesAttended": "2007-09-01",
                    "toDatesAttended": "2011-06-30",
                    "description": "Excelled in calculus and algebra courses."
                }
            ],
            "skill": ["Java", "Spring Boot", "React.js", "MongoDB", "JavaScript"],
            "Textera": "Passionate software engineer with a focus on backend development.",
            "services": ["Web Development", "API Integration", "Database Management"],
            "Pack": "Premium",
            "active": true,
            "collectionPhotosProject": [
                "https://example.com/project1.jpg",
                "https://example.com/project2.jpg"
            ]
        }

        const response = await fetch('http://localhost:8082/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            },
            body: JSON.stringify(json2), // Assuming `json` is defined elsewhere in your code
        });

        if (response.status === 200) { // Assuming 201 is the status code for a successful creation
            alert("Add  registered");
            navig("/")

        } else {

            alert("Error: " + result.message); // Displaying error message from server response
        }

    };




    // Fonction pour télécharger une image sur Firebase Storage et obtenir son URL de téléchargement
    const uploadImageToFirebase = async (image) => {
        const storageRef = ref(storage, `images/${image.file.name}`);
        await uploadBytes(storageRef, image.file);
        const url = await getDownloadURL(storageRef);
        return url;

    };

    // Si aucune image n'est sélectionnée
    if (images.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Selectionne une Photo profile
                </h1>

                {/* Input pour charger des images depuis le dossier local */}
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="mb-6 p-2 bg-gray-200 rounded-lg shadow-sm text-sm text-gray-700 cursor-pointer w-full"
                />

                <p className="text-center text-gray-600">Aucune image sélectionnée.</p>

                <Footer prog={5} onSecendButtonClick={handleButtonClick}
                    secend_button=" Add photos profil "
                />
            </div>
        );
    }

    return (
        <div className="container  py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Ma Galerie d'Images
            </h1>

            {/* Affichage de l'image actuelle */}
            <div className="relative px-48">
                <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="object-contain w-full h-96 rounded-lg shadow-lg mb-4"
                />
                <button
                    onClick={previousImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Numéro de l'image actuelle */}
            <p className="text-center text-gray-600 mt-2">
                Image {currentImageIndex + 1} de {images.length}
            </p>

            {/* Footer */}
            <Footer
                prog={5}
                onSecendButtonClick={handleButtonClick}
                onSecendButtonClick2={handleButtonClick2}
                button2={3}

                secend_button=" Add photos "
            />
        </div>
    );
};

export default L;
