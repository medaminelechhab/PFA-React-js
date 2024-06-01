import React, { useState } from 'react';
import done from '../icons/done.png';
import clock from '../icons/clock.png';

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState('Basic');

  const packages = [
    { name: 'Basic', price: '$45', contact: 'Please contact me before placing an order.',delivery: '1-day delivery', includes: 'Source code' },
    { name: 'Standard', price: '$85', contact: 'Please contact me before placing an order.',delivery: '1-day delivery', includes: 'Source code' },
    { name: 'Premium', price: '$150', contact: 'Please contact me before placing an order.',delivery: '1-day delivery', includes: 'Source code' },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10 border border-gray-300">
      <div className="flex border-b border-gray-200">
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            className={`flex-1 py-2 text-center ${selectedPackage === pkg.name ? 'border-b-2 border-black py-4' : ''}`}
            onClick={() => setSelectedPackage(pkg.name)}
          >
            {pkg.name}
          </button>
        ))}
      </div>
      {packages.map((pkg) => (
        pkg.name === selectedPackage && (
          <div key={pkg.name} className="p-4 mb-3">
            <div className='flex justify-between mt-4'>
            <h2 className="text-lg text-gray-700 font-medium mb-2 uppercase">{pkg.name}</h2>
            <p className="text-2xl text-gray-700 mb-4 font-normal">US{pkg.price}</p>
            </div>
            <p className="mb-2 text-gray-500 font-medium">{pkg.contact}</p>
            <div className='flex mb-2'>
            <img className='size-4 mt-0.5 mr-4' src={clock} alt=''/>
            <p className="text-sm font-medium text-gray-500">{pkg.delivery}</p>
            </div>
            <div className='flex mb-6'>
            <img className='size-4 mt-0.5 mr-4' src={done} alt=''/>
            <p className="text-sm font-medium text-gray-500">{pkg.includes}</p>
            </div>
            <button className="bg-black text-white py-2 px-44 rounded">
              Continue
            </button>
            <span className='flex justify-center mt-3 font-medium text-gray-700 text-base'>Compare packages</span>
          </div>
        )
      ))}
    </div>
  );
};

export default PackageSelector;
