import React, { useContext, useState } from 'react';
import Footer from "../../pages1-10/Footer";
import { AnnonceContext } from '../Auth/AnnonceContext';
import { useNavigate } from 'react-router-dom';
function AddPub2() {
  const navigate = useNavigate()
  const { budget, setBudget } = useContext(AnnonceContext)
  const [selectedBudget, setSelectedBudget] = useState('');
  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };
  const handleBudgetSubmuite = (event) => {

    setBudget(selectedBudget)
    navigate("/Add_pub5")

  };

  return (
    <div className='flex justify-center'>
      <div className='mt-12'>
        <h1 className='text-2xl font-bold text-gray-900 mb-7'>Quel est votre budget ?</h1>
        <h1 className='text-gray-500 font-medium mb-2'>Budget approximatif</h1>
        <div className="space-y-4">
          {['Moins de 500 €', '500 à 1 000 €', '1 000 à 10 000 €', '10 000 € et plus'].map((budget, index) => (
            <label
              key={index}
              className={`flex items-center justify-between p-4 rounded-2xl w-[500px] h-14 border  border-white cursor-pointer ${selectedBudget === budget ? 'bg-blue-100 border-blue-300' : 'bg-gray-100 border-gray-300'
                }`}
            >
              <span className="text-gray-500 text-base font-normal">{budget}</span>
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={selectedBudget === budget}
                onChange={handleBudgetChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
            </label>
          ))}
        </div>
        <div className='mt-4 border bg-orange-100 w-[500px] h-14 rounded-xl flex items-center'>
          <p className='ml-3 text-orange-400 font-medium'>99% des clients trouvent un freelance dans leur budget</p>
        </div>
      </div>
      <Footer
        prog={9}
        secend_button="thanks for adding budget"
        onSecendButtonClick={handleBudgetSubmuite}
      />
    </div>
  )
}

export default AddPub2;
