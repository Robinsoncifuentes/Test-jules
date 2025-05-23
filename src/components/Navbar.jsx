import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-dark text-secondary-light p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-heading">
          <a href="#home" className="text-accent-coral hover:text-accent-coral/80 transition-all duration-300 inline-block hover:scale-105">MySite</a>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-secondary-light hover:text-white hover:bg-primary-dark/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto pt-4 md:pt-0`}>
          <ul className="font-sans flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg items-center">
            <li>
              <a href="#home" className="hover:text-accent-coral transition-all duration-300 block py-2 md:py-0 hover:scale-105 md:inline-block" onClick={() => isOpen && setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent-coral transition-all duration-300 block py-2 md:py-0 hover:scale-105 md:inline-block" onClick={() => isOpen && setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent-coral transition-all duration-300 block py-2 md:py-0 hover:scale-105 md:inline-block" onClick={() => isOpen && setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
