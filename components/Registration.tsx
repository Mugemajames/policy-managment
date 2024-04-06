
"use client";
import { useState } from 'react';
import router, { useRouter } from 'next/router';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    router.push('');
  };

  return (
    <div className="bg-gradient-to-b from-indigo-400 to-purple-800 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
        <p className="text-center text-gray-400 text-sm mt-1 mb-6">Create new Account</p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <i className="fas fa-user text-gray-500 mr-2"></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-envelope text-gray-500 mr-2"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-mobile-alt text-gray-500 mr-2"></i>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-user-circle text-gray-500 mr-2"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 flex items-center">
            <i className="fas fa-lock text-gray-500 mr-2"></i>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
      </div>
    </div>
  );
};

export default SignUpForm;
