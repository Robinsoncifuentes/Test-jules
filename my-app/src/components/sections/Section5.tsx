import React from 'react';

const Section5: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a plan that works best for you. Transparent pricing, no hidden fees.
          </p>
        </div>

        {/* Placeholder for Pricing Table - e.g., a 3-column grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">Basic</h3>
            <p className="text-4xl font-bold text-sky-600 mb-4">$10<span className="text-lg font-normal text-slate-500">/mo</span></p>
            <ul className="text-slate-600 space-y-2 mb-6">
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Limited Support</li>
            </ul>
            <a href="#" className="w-full block text-center bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors">
              Get Started
            </a>
          </div>
          {/* Pro Plan (Highlighted) */}
          <div className="bg-sky-600 text-white p-8 rounded-lg shadow-2xl border border-sky-700 scale-105">
            <h3 className="text-2xl font-semibold mb-3">Pro</h3>
            <p className="text-4xl font-bold mb-4">$25<span className="text-lg font-normal text-sky-100">/mo</span></p>
            <ul className="text-sky-50 space-y-2 mb-6">
              <li>Feature A & B</li>
              <li>Feature C</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
            </ul>
            <a href="#" className="w-full block text-center bg-white text-sky-700 font-semibold py-3 px-6 rounded-lg hover:bg-sky-50 transition-colors">
              Choose Pro
            </a>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">Enterprise</h3>
            <p className="text-4xl font-bold text-sky-600 mb-4">$50<span className="text-lg font-normal text-slate-500">/mo</span></p>
            <ul className="text-slate-600 space-y-2 mb-6">
              <li>All Pro Features</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
            <a href="#" className="w-full block text-center bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
