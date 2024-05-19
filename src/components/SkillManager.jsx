import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import 'tailwindcss/tailwind.css';

const suggestedSkills = [
  "Oracle Enterprise Service Bus", "Eric", "Spacewalk", "Quark Xpress",
  "Google Closure", "Spock", "Autodesk Revit", "Microsoft Virtual Server",
  "Mud", "YUI Library", "Agavi", "RapidMiner", "Mapinfo", "Bremaxx",
  "Ranorex Studio", "Capistrano", "Auctiva", "Abaqus", "IBM SPSS",
  "Software", "OpenFOAM", "Fiddler", "Revinate", "Statpoint Statgraphics",
  "Nuke", "Autoit"
];

const SkillManager = () => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (tags) => {
    const validSkills = tags.filter(tag => suggestedSkills.includes(tag));
    if (validSkills.length <= 15) {
      setSkills(validSkills);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!skills.includes(suggestion) && skills.length < 15) {
      setSkills([...skills, suggestion]);
    }
    setInputValue('');
  };


  const filteredSuggestions = suggestedSkills.filter(skill =>
    skill.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className='w-screen h-screen overflow-y-hidden'>
      <div className="ml-16 mt-14 relative">
        <p className='mb-4 font-medium'>6/10</p>
        <h1 className="text-4xl font-sm font-mirza mb-6">Nearly there! What work are you here to do?</h1>
        <p className='font-medium text-base'>Your skills show clients what you can offer, and help us choose which jobs to recommend to you. Add</p>
        <p className='font-medium text-base mb-2'>or remove the ones we’ve suggested, or start typing to pick more. It’s up to you.</p>
        <Link className='font-medium text-base text-green-700 border-b border-b-green-700'>Why choosing carefully matters</Link>
        <div className="mb-4">
          <label className="block text-gray-700 text-base font-medium mb-2 mt-12">
            Your skills
          </label>
          <TagsInput
      className="border-2 border-gray-200 rounded-md hover:border-gray-300 pl-2 w-2/4"
      value={skills}
      onChange={handleChange}
      inputProps={{
        placeholder: 'Enter skills',
        value: inputValue,
        onChange: handleInputChange,
      }}
      renderTag={({ tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...props }) => (
        <span key={key} {...props} className=" text-black border-2 bg-gray-200  border-gray-400 rounded-full w-auto px-2 py- m-1 inline-flex text-center items-center">
          {getTagDisplayValue(tag)}
          {!disabled && (
            <button
              type="button"
              className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => onRemove(key)}
            >
              ×
            </button>
          )}
        </span>
      )}
    />

        </div>
        {inputValue && (
          <div className="absolute top-full left-0 w-56 bg-white shadow-lg">
            <div className="flex flex-col rounded-lg bg-white">
              {filteredSuggestions.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(skill)}
                  className="text-gray-800   hover:text-gray-900 py-2 px-4 border-b border-gray-200 last:border-b-0 transition-colors duration-300 ease-in-out"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillManager;
