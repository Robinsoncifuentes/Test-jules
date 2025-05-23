import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(`Thank you, ${formData.name}! Your message has been received (logged to console).`);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`bg-secondary-light py-20 sm:py-24 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-primary-dark text-center mb-12">
          Contact Us
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl space-y-6"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-sans text-text-main text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="font-sans text-text-main shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition duration-200 ease-in-out"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-sans text-text-main text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-sans text-text-main shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition duration-200 ease-in-out"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block font-sans text-text-main text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="font-sans text-text-main shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition duration-200 ease-in-out"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-accent-coral hover:brightness-95 text-white font-sans font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-coral focus:ring-offset-2 focus:ring-offset-secondary-light transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:scale-95 active:brightness-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
