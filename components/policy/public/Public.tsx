"use client";
import React, { useState } from 'react';
import { links } from "./InstitutionPolicies";

const SelectComponent = () => {
  // State to store the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle select change
  const handleSelectChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedValue(e.target.value);
  };

  return (
    

    <div className="bg-gradient-to-b from-indigo-400 to-purple-800 h-screen flex items-center justify-left">
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Select Instutition </h2>
    <div className="mb-4 flex items-center">
      {/* Select element */}
      <select value={selectedValue} onChange={handleSelectChange} className="mt-1 p-2 w- border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select Institution</option>
        <option value="option1">Auca</option>
        <option value="option2">Bk</option>
        <option value="option3">RRA</option>
      </select>

      {/* Display selected value */}
      {/* {selectedValue && <p>Selected value: {selectedValue}</p>} */}
    </div>
    <div className="mr-0 md:mr-8 mb-6 md:mb-0">
      {/* Select element */}
      <select value={selectedValue} onChange={handleSelectChange} className="mt-1 p-2 w- border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select Department</option>
        <option value="option1">Information Technology</option>
        <option value="option2">Accountancy</option>
        <option value="option3">Displine</option>
      </select>

      {/* Display selected value */}
      {/* {selectedValue && <p>Selected value: {selectedValue}</p>} */}
    </div>
    </div>
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Select Instutition </h2>
    <div className="mb-4 flex items-center">
      {/* Select element */}
      <select value={selectedValue} onChange={handleSelectChange} className="mt-1 p-2 w- border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select Institution</option>
        <option value="option1">Auca</option>
        <option value="option2">Bk</option>
        <option value="option3">RRA</option>
      </select>

      {/* Display selected value */}
      {/* {selectedValue && <p>Selected value: {selectedValue}</p>} */}
    </div>
    
      {/* Select element */}
      <select value={selectedValue} onChange={handleSelectChange} className="mt-1 p-2 w- border rounded-md focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select Department</option>
        <option value="option1">Information Technology</option>
        <option value="option2">Accountancy</option>
        <option value="option3">Displine</option>
      </select>

      {/* Display selected value */}
      {/* {selectedValue && <p>Selected value: {selectedValue}</p>} */}
    </div>
    </div>

  );
};

export default SelectComponent;