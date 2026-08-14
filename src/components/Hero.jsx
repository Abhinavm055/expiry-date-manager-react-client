import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-32 -left-32 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-slate-100 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
          <span className="text-xs font-medium text-slate-600">The smarter way to track expiration dates</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Never let your products <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            expire unnoticed again.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Effortlessly scan barcodes, track expiration dates, and get timely alerts before items go bad. Save money and reduce waste with ExpiryManager.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/register" className="w-full sm:w-auto btn-primary text-lg px-8 py-3.5 shadow-primary/25 shadow-lg inline-block text-center">
            Get Started for Free
          </Link>
          <Link to="/login" className="w-full sm:w-auto btn-secondary text-lg px-8 py-3.5 inline-block text-center">
            Log in to Dashboard
          </Link>
        </div>
        
        <div className="mt-16 border-t border-slate-200 pt-8 flex items-center justify-center space-x-8 text-sm text-slate-500 font-medium">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Barcode Scanning
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Smart Notifications
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Cloud Sync
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
