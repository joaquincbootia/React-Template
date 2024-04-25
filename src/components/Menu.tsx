import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const ResponsiveAppBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 top-0 z-10">
      <div className="container mx-auto px-4 py-6 flex items-center relative">
        <Link to="/">
          <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
        </Link>

        <nav className="ml-auto md:hidden relative">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg">
              <nav className="flex flex-col p-4">
                <Link to="/" className="text-white hover:bg-gray-700 py-2 px-4 block" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="text-white hover:bg-gray-700 py-2 px-4 block" onClick={toggleMenu}>About</Link>
              </nav>
            </div>
          )}
        </nav>

        <nav className="md:flex space-x-4 ml-4 hidden">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveAppBar;