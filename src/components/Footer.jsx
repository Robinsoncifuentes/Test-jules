import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm sm:text-base">
          &copy; {currentYear} MySite. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
