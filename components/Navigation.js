"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/components/Logo"

const Navigation = () => {
  // State to manage the visibility of the dropdown menus
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isInstitutionDropdownOpen, setIsInstitutionDropdownOpen] = useState(false);

  // Function to toggle the user dropdown menu
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  // Function to toggle the institution dropdown menu
  const toggleInstitutionDropdown = () => {
    setIsInstitutionDropdownOpen(!isInstitutionDropdownOpen);
  };

  // Dummy authenticated user data
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/50',
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
        <Image
          src="/policy.png"
          className="rounded-full"
          width={40}
          height={40}
          alt="User"
          priority
        />

        </Link>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        
        <li className="relative">
          {/* Institution Type dropdown */}
          <span className="cursor-pointer" onClick={toggleInstitutionDropdown}>
            Institution Type
            {/* Dropdown indicator */}
            <svg
              className="w-4 h-4 inline-block ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>
          {/* Dropdown menu */}
          {isInstitutionDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg">
              <ul>
                <li>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/policy/public_inst">
                    
                      Public
                    
                  </Link>
                </li>
                <li>
                  <Link href="/policy/private_inst" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    
                      Private
                    
                  </Link>
                </li>
            
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* Authenticated user section */}
      {user ? (
        <div className="relative">
          {/* Profile picture */}
          <img
            src={"/user.avif"}
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleUserDropdown}
          />

          {/* Dropdown menu */}
          {isUserDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border rounded shadow-lg">
              <ul>
                <li>
                  <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Profile
                      
                  </Link>
                </li>
                <li>
                  <Link href="/policy/auth/loginForm" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                    Logout
                  </button>
                  </Link>
                </li>
                
              </ul>
            </div>
          )}
        </div>
      ) : (
        // Render authentication buttons if user is not authenticated
        <div>
          <Link href="/LoginForm">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
