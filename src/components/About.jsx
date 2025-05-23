import React from 'react';

function About() {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-down delay-100">
          About Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto animate-fade-in-up delay-300">
          We are a passionate team dedicated to creating innovative solutions and delivering exceptional user experiences. 
          Our mission is to harness the power of technology to solve real-world problems and drive positive change. 
          With a focus on collaboration, creativity, and continuous learning, we strive to exceed expectations and build a brighter future.
        </p>
      </div>
    </section>
  );
}

export default About;
