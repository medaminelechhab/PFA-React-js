import React, { useState } from 'react';
import business from '../icons/businessman.png';
import Client from '../icons/client.png';
import { Link } from 'react-router-dom';
import RadioCard from './RadioCard';

const JoinPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <h1 className="mb-10 text-5xl font-bold text-gray-800 dark:text-white font-serif ">Join as a Client or Freelancer</h1>

                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <RadioCard id="freelancer" value="freelancer" selectedRole={selectedRole} setSelectedRole={setSelectedRole}>
                        <div className="text-xl font-semibold mb-2">I’m a Freelancer</div>
                        <div>Looking for work</div>
                        <img src={business} alt="Freelancer Logo" className="mt-6 h-24 w-24 mx-auto"/>
                    </RadioCard>

                    <RadioCard id="client" value="client" selectedRole={selectedRole} setSelectedRole={setSelectedRole}>
                        <div className="text-xl font-semibold mb-2">I’m a Client</div>
                        <div>Hiring for a project</div>
                        <img src={Client} alt="Client Logo" className="mt-6 h-24 w-24 mx-auto"/>
                    </RadioCard>


                </ul>

                <button
                    className={`mt-10 px-8 py-4 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out ${
                        selectedRole === 'freelancer' || selectedRole === 'client' ? 'bg-green-500 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                >
                    {selectedRole === 'freelancer' ? 'Continue as a Freelancer' : selectedRole === 'client' ? 'Continue as a Client' : 'Select a Role'}
                </button>

                <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">Already have an account? <Link to="/login" className="text-green-500 hover:underline focus:outline-none">Log In</Link></p>
            </div>
        </div>
    );
};

export default JoinPage;
