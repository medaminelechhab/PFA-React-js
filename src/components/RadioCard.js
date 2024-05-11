import React from 'react';
import { useState } from 'react';

const RadioCard = ({ id, value, selectedRole, setSelectedRole, children }) => {
    return (
        <li className="relative">
            <div className="block w-full">
                <input
                    type="radio"
                    id={id}
                    name="role"
                    value={value}
                    className="hidden peer"
                    onChange={() => setSelectedRole(value)}
                />
                <label
                    htmlFor={id}
                    className={`block w-full p-8 text-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out transform ${
                        selectedRole === value ? 'ring-2 ring-green-500' : 'hover:ring-2 hover:ring-green-500'
                    }`}
                >
                    <span
                        className={`inline-block w-4 h-4 mr-3 rounded-full ${selectedRole === value ? 'bg-green-500' : 'bg-transparent'}`}></span>
                    {children}
                </label>
            </div>
        </li>
    );
};

export default RadioCard;
