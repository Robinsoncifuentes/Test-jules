import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold">MyLanding</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-sky-400 transition-colors">Features</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
