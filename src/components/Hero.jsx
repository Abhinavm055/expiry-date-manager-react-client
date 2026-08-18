import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#09090b] text-zinc-100 pt-16 pb-32">
      {/* Dynamic Background glowing ambient spheres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-[120px]"></div>
        <div className="absolute top-48 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Expiry Tracker Logo" className="w-24 h-24 object-contain rounded-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.35)] animate-fade-in-up" />
        </div>

        <div className="inline-flex items-center space-x-2 bg-zinc-900/90 border border-emerald-500/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold text-emerald-300 tracking-wider uppercase font-display">Smart Expiration Date Management</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 font-display leading-tight">
          Never let your products <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]">
            expire unnoticed again.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10 leading-relaxed font-normal">
          Effortlessly scan barcodes, track product expiration dates, and get automated alerts. Save money and reduce waste with ExpiryTracker.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/register" className="w-full sm:w-auto btn-primary text-lg px-8 py-3.5 inline-block text-center">
            Get Started for Free
          </Link>
          <Link to="/login" className="w-full sm:w-auto btn-secondary text-lg px-8 py-3.5 inline-block text-center">
            Log in to Dashboard
          </Link>
        </div>
        
        <div className="mt-16 border-t border-zinc-800/80 pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400 font-semibold font-display">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Barcode Camera Scanning
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Expiry Date Filtering
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Instant Cloud Sync
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
