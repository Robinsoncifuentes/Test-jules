import React from 'react';

function Hero() {
  return (
    <section 
      id="home" 
      className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-down">
          Welcome to Our Awesome Landing Page
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Discover amazing things. We provide solutions that transform your digital experience. Join us on this exciting journey!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8 animate-fade-in-up delay-400">
          <img 
            src="https://picsum.photos/seed/person1/300/200" 
            alt="Placeholder image of a person" 
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <img 
            src="https://picsum.photos/seed/teamA/301/200" 
            alt="Team placeholder image" 
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
