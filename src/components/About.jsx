import React from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className={`bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center opacity-0 translate-y-10 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-primary-dark mb-6">
          About Us
        </h2>
        <p className="font-sans text-lg sm:text-xl text-text-main leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
          We are a passionate team dedicated to creating innovative solutions and delivering exceptional user experiences. 
          Our mission is to harness the power of technology to solve real-world problems and drive positive change. 
          With a focus on collaboration, creativity, and continuous learning, we strive to exceed expectations and build a brighter future.
        </p>
      </div>
    </section>
  );
}

export default About;
