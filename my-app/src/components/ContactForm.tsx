'use client'; // Required for event handlers and state

import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { // Updated regex
      newErrors.email = 'Email is invalid. Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Phone number seems invalid. Please check the format.';
    }

    setErrors(newErrors);
    setIsSubmitted(false); // Reset submission status on new validation
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for a field when user starts typing in it
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      // Here you would typically send the data to a server
      setIsSubmitted(true); // Set submission status
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      setErrors({}); // Clear errors
      // alert('Form submitted! Check the console for data.'); // Replaced by success message
    }
  };

  const inputBaseClasses = "mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-slate-700 placeholder-slate-400";
  const inputFocusClasses = "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500";
  const errorBorderClasses = "border-red-500 ring-red-500";
  const normalBorderClasses = "border-slate-300";

  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
            We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-slate-50 p-8 md:p-10 rounded-xl shadow-2xl space-y-6">
          {isSubmitted && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
              <span className="font-medium">Success!</span> Your message has been sent. We'll be in touch soon.
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBaseClasses} ${errors.name ? errorBorderClasses : normalBorderClasses} ${inputFocusClasses}`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBaseClasses} ${errors.email ? errorBorderClasses : normalBorderClasses} ${inputFocusClasses}`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-slate-500 text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputBaseClasses} ${errors.phone ? errorBorderClasses : normalBorderClasses} ${inputFocusClasses}`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="How can we help you today?"
              value={formData.message}
              onChange={handleChange}
              className={`${inputBaseClasses} ${errors.message ? errorBorderClasses : normalBorderClasses} ${inputFocusClasses}`}
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
