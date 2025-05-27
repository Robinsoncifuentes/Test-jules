import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-800 text-slate-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#privacy" className="mx-2 hover:text-sky-400 transition-colors">Privacy Policy</a>
          <span className="text-slate-500">|</span>
          <a href="#terms" className="mx-2 hover:text-sky-400 transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} MyLanding. All rights reserved.</p>
        <div className="mt-4">
          <p className="text-xs">Follow us: 
            <a href="#" className="ml-2 hover:text-sky-400">Twitter</a>, 
            <a href="#" className="ml-2 hover:text-sky-400">Facebook</a>, 
            <a href="#" className="ml-2 hover:text-sky-400">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
