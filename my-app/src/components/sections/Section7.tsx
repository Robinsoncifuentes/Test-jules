import React from 'react';

const Section7: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common queries we receive.
          </p>
        </div>

        {/* Placeholder for FAQ items - e.g., accordion or list */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">What is MyLanding?</h3>
            <p className="text-slate-600">
              MyLanding is a platform designed to help you create beautiful and effective landing pages quickly and easily. We provide tools and templates to get you started.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Is there a free trial?</h3>
            <p className="text-slate-600">
              Yes, we offer a 14-day free trial for you to explore all our Pro features. No credit card required to get started.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-700 mb-2">How can I get support?</h3>
            <p className="text-slate-600">
              We offer comprehensive support through email, chat, and our extensive knowledge base. Pro plan users get priority support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
