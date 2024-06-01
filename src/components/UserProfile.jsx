import React, { useState } from 'react';
import userprofile from '../icons/Max-R_Headshot (1).jpg'
import out from '../icons/logout.png'

const UserProfile = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div className="flex flex-col items-center">
      <div className='' onClick={toggleAlert}>
        <img className='size-10 border rounded-full' src={userprofile} alt=''/>
      </div>
      {showAlert && (
        <div className="absolute mt-12 h-56 w-56 border rounded-lg shadow-lg bg-white">
          <div className="flex flex-col items-center">
            <div className="mb-4">
            <img className='size-20 mt-6 border rounded-full' src={userprofile} alt=''/>
            </div>
            <h2 className="text-base font-medium">Mouaad EL Khadari</h2>
            <p className="text-gray-500 text-xs font-semibold">Client</p>
          </div>
          <div className="flex items-center mt-6 cursor-pointer ml-6">
                <img src={out} alt="" className="size-6 mr-4" />
                <span className="text-black text-base font-normal">Log out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
