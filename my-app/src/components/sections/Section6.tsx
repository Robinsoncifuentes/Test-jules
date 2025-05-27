import React from 'react';

const Section6: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          Join thousands of satisfied customers who are already benefiting from our platform. 
          Sign up today or contact us for more information.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact" // Link to contact form section
            className="bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-sky-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="#" // Placeholder for a sign-up page or other primary action
            className="bg-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-300 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section6;
