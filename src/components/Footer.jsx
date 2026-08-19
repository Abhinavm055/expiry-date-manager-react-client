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
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/Abhinavm055/expiry-date-manager-react-client" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 fill-current mr-1 text-zinc-400 hover:text-emerald-400 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub (Abhinavm055)
            </a>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Support</Link>
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
