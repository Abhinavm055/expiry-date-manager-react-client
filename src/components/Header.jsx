import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shadow-md">
              ED
            </div>
            <span className="ml-3 font-bold text-xl text-slate-800 tracking-tight">Expiry<span className="text-primary">Manager</span></span>
          </Link>

          {/* Navigation Links / Auth */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
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
