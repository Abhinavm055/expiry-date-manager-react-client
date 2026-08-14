import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoggedInHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the backend logout API to clear the httpOnly cookie
      await fetch('http://localhost:5001/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Always remove local token and redirect
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shadow-md">
              ED
            </div>
            <span className="ml-3 font-bold text-xl text-slate-800 tracking-tight">Expiry<span className="text-primary">Manager</span></span>
          </Link>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-600">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              My Account
            </div>
            <button 
              onClick={handleLogout}
              className="btn-secondary text-sm px-4 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoggedInHeader;
