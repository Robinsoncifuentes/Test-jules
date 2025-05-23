import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <section id="contact" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 animate-fade-in-down delay-200">
          Contact Us
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl space-y-6 animate-fade-in-up delay-400"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
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
