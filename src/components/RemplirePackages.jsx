import React, { useState } from 'react';

const PackageForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [packages, setPackages] = useState([
    { name: 'Basic', price: '', description: '', days: '' },
    { name: 'Standard', price: '', description: '', days: '' },
    { name: 'Premium', price: '', description: '', days: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index][field] = value;
    setPackages(updatedPackages);
  };

  const handleNext = () => {
    if (currentStep < packages.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted packages:', packages);
    // Add your submit logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center  mt-8">
      
      <div className="w-full max-w-md  p-4 border rounded-none bg-gray-100 border-gray-300">
      <h2 className="text-2xl font-bold mb-8">{packages[currentStep].name} Package</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="text"
            value={packages[currentStep].price}
            onChange={(e) => handleChange(currentStep, 'price', e.target.value)}
            className="mt-1 p-2 block w-full border-gray-300 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            value={packages[currentStep].description}
            onChange={(e) => handleChange(currentStep, 'description', e.target.value)}
            rows="2"
            className="mt-1 p-2 block w-full border rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Days</label>
          <input
            type="number"
            value={packages[currentStep].days}
            onChange={(e) => handleChange(currentStep, 'days', e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md border-gray-300"
          />
        </div>
        <div className="flex justify-between w-full max-w-md">
  {currentStep > 0 && (
    <button
      onClick={handleBack}
      className="px-4 py-2 bg-gray-500 text-white rounded"
    >
      Back
    </button>
  )}
  {currentStep < packages.length - 1 ? (
    <button
      onClick={handleNext}
      className="px-4 py-2 bg-blue-500 text-white rounded ml-auto"
    >
      Next
    </button>
  ) : (
    <button
      onClick={handleSubmit}
      className="px-4 py-2 bg-green-500 text-white rounded ml-auto"
    >
      Submit
    </button>
  )}
</div>

      </div>

      
    </div>
  );
};

export default PackageForm;
