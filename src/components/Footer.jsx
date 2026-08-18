import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 mt-auto text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center cursor-pointer mb-4 group">
              <img src="/logo.png" alt="Expiry Tracker Logo" className="w-9 h-9 object-contain rounded-xl border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-all" />
              <span className="ml-2.5 font-black text-xl text-white tracking-tight font-display">Expiry<span className="text-emerald-400">Tracker</span></span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm">
              The smartest way to manage your inventory, track expiration dates, and eliminate waste in your home or business.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-display">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-medium">
              <li><Link to="/features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="hover:text-emerald-400 transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-display">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-medium">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-medium">
          <p>&copy; {currentYear} ExpiryTracker. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Support</Link>
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
