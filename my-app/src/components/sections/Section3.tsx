import React from 'react';

const Section3: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understanding our process is simple. We've streamlined everything to ensure a smooth experience for you.
          </p>
        </div>

        {/* Example: Steps layout */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 text-left">
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-sm">1</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Sign Up</h3>
            <p className="text-slate-500">
              Create your account in just a few minutes. It's free to get started!
            </p>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-sm">2</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Configure</h3>
            <p className="text-slate-500">
              Set up your preferences and customize the service to fit your specific needs.
            </p>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-sm">3</div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Enjoy</h3>
            <p className="text-slate-500">
              Start using our platform and experience the benefits immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
