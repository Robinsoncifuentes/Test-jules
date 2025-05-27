import React from 'react';

const Section1: React.FC = () => {
  return (
    <section id="home" className="w-full py-20 md:py-32 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Welcome to MyLanding
        </h2>
        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
          This is the primary hero section. Discover amazing features and solutions designed to boost your productivity and success.
        </p>
        <a
          href="#features"
          className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-100 hover:text-indigo-800 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Section1;
