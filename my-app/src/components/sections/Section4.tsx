import React from 'react';

const Section4: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are proud to have helped so many people. Here's what some of them think about our service.
          </p>
        </div>

        {/* Placeholder for testimonials - e.g., a 2-column grid or carousel */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
            <p className="text-slate-600 italic mb-4">
              "This service is fantastic! It has significantly improved our workflow and saved us a lot of time. Highly recommended!"
            </p>
            <p className="text-slate-700 font-semibold">- Jane Doe, CEO of ExampleCorp</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
            <p className="text-slate-600 italic mb-4">
              "I was looking for a solution like this for ages. The customer support is top-notch, and the features are exactly what we need."
            </p>
            <p className="text-slate-700 font-semibold">- John Smith, Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
