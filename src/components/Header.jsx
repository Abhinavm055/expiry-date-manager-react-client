import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <img src="/logo.png" alt="Expiry Tracker Logo" className="w-10 h-10 object-contain rounded-xl border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-all" />
            <span className="ml-3 font-extrabold text-2xl text-white tracking-tight font-display">Expiry<span className="text-emerald-400">Tracker</span></span>
          </Link>

          {/* Navigation Links / Auth */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-semibold text-zinc-300 hover:text-emerald-400 transition-colors font-display">
              Login
            </Link>
            <Link to="/register" className="btn-primary text-sm px-4 py-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
