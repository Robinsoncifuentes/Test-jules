import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'; // Keep for any App-specific global styles, or it can be removed if not used.

function App() {
  return (
    <div className="bg-bg-light font-sans text-text-main">
      <Navbar />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
