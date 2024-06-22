import React from 'react';
import image from '../../assets/images/amine1.jpg';

const CardII = ({ searchTerm }) => {
    const truncatedTextera = searchTerm.textera ? searchTerm.textera.slice(0, 90) : '';

    return (
        <div className="max-w-72  h-auto mx-auto bg-white shadow-lg  rounded-xl overflow-hidden">
            <img className="w-full h-48 object-cover" src={searchTerm.photoProfile} alt="Shopify Store" />
            <div className="ml-2 my-2">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="size-9 rounded-full" src={searchTerm.photoProfile} alt="Sonarish" />
                    </div>
                    <div className="ml-3">
                        <div className="text-md leading-tight font-mono text-black">{searchTerm.professional}</div>
                        <div className="text-xs text-gray-500">#{searchTerm.id}</div>
                    </div>
                </div>
                <div className="mt-2">
                    <h3 className=" leading-tight font-normal text-justify mr-2 text-ms  text-gray-900">{truncatedTextera}...</h3>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center">
                            <svg className="size-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.564-.954L10 0l2.946 5.957 6.564.954-4.754 4.634 1.122 6.545z" />
                            </svg>
                            <svg className="size-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.564-.954L10 0l2.946 5.957 6.564.954-4.754 4.634 1.122 6.545z" />
                            </svg>
                            <svg className="size-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.564-.954L10 0l2.946 5.957 6.564.954-4.754 4.634 1.122 6.545z" />
                            </svg>
                            <svg className="size-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.564-.954L10 0l2.946 5.957 6.564.954-4.754 4.634 1.122 6.545z" />
                            </svg>
                            <svg className="size-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545-4.754-4.634 6.564-.954L10 0l2.946 5.957 6.564.954-4.754 4.634 1.122 6.545z" />
                            </svg>
                        </div>
                        <span className="ml-1 text-xs font-bold text-gray-600">4.9</span>
                        <span className="ml-1 text-xs  text-gray-600">(1k+)</span>
                    </div>
                    <div className="mt-3 text-md leading-tight font-bold text-gray-900">From US$145</div>
                    <div className="mt-3 flex items-center">
                        <svg className="h-3 w-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M16.72 2.879a.75.75 0 0 1 .33.621v7a.75.75 0 0 1-1.029.696l-5-2a.75.75 0 0 1 .557-1.392l3.972 1.588V4.608l-3.972 1.588a.75.75 0 0 1-.557-1.392l5-2a.75.75 0 0 1 .7.075Z" />
                            <path d="M2.3 2.25a.25.25 0 0 0-.25.25v9c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-9a.25.25 0 0 0-.25-.25h-8ZM.55 2.5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 .55 11.5v-9Z" />
                        </svg>
                        <span className="ml-1 text-xs text-gray-600">Offers Messgae consultations</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardII;