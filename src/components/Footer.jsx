import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-secondary-light py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="font-sans text-sm sm:text-base">
          &copy; {currentYear} MySite. All rights reserved.
        </p>
        <p className="font-sans text-xs text-secondary-light/75 mt-2">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
