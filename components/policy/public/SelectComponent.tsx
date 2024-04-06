"use client";
import React, { useState } from 'react';
import { links } from './InstitutionPolicies';
import Lating from '../Latings';
import '../styles.css';

const SelectComponent = () => {
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleInstitutionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedInstitution(event.target.value);
    setSelectedDepartment('');
  };

  const handleDepartmentChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedDepartment(event.target.value);
  };

  const renderPolicies = () => {
    const institution = links.find((item) => item.name === selectedInstitution);
    if (!institution) return [];

    const department = institution.sublinks.find((item) => item.Head === selectedDepartment);
    if (!department) return [];

    return department.sublink;
  };

  const indexOfLastPolicy = currentPage * itemsPerPage;
  const indexOfFirstPolicy = indexOfLastPolicy - itemsPerPage;
  const currentPolicies = renderPolicies().slice(indexOfFirstPolicy, indexOfLastPolicy);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gradient-to-b from-indigo-400 to-purple-800 h-fit flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800">Select Institution</h2>
        {/* Institution Select */}
        <div className="mb-4">
          <select
            value={selectedInstitution}
            onChange={handleInstitutionChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Institution</option>
            {links.map((institution, index) => (
              <option key={index} value={institution.name}>
                {institution.name}
              </option>
            ))}
          </select>
        </div>

        {/* Department Select */}
        <h2 className="text-2xl font-bold text-gray-800">Select Department</h2>
        <div className="mb-4">
          <select
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled={!selectedInstitution}
          >
            <option value="">Select Department</option>
            {selectedInstitution &&
              links
                .find((item) => item.name === selectedInstitution)
                ?.sublinks.map((department, index) => (
                  <option key={index} value={department?.Head}>
                    {department?.Head}
                  </option>
                ))}
          </select>
        </div>
      </div>

      {/* Policies */}
      <div className="policy">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="font-bold text-lg">Policies</h2>
          <div className="grid grid-cols-1 gap-4">
            {currentPolicies.map((policy, index) => (
              <a key={index} href={policy.link} className="block">
                <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition duration-300 ease-in-out">
                  <p className="font-bold text-blue-500">{policy.name}</p>
                  <p className="text-gray-500">{policy.description}</p>
                  <Lating />
                </div>
              </a>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-4">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={renderPolicies().length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'mr-1 font-bold' : 'mr-1'}>
            <a onClick={() => paginate(number)} href="#" className="block py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SelectComponent;
