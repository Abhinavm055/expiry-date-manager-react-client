import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../api/config';

const LoggedInHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex-shrink-0 flex items-center cursor-pointer group">
            <img src="/logo.png" alt="Expiry Tracker Logo" className="w-10 h-10 object-contain rounded-xl border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-all" />
            <span className="ml-3 font-extrabold text-2xl text-white tracking-tight font-display">Expiry<span className="text-emerald-400">Tracker</span></span>
          </Link>

          {/* User Profile & Logout */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/account" 
              className="flex items-center text-sm font-semibold text-zinc-300 hover:text-emerald-400 font-display transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-zinc-900 border border-emerald-500/30 group-hover:border-emerald-400 flex items-center justify-center text-emerald-400 mr-2 shadow-inner transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              My Account
            </Link>
            <button 
              onClick={handleLogout}
              className="btn-secondary text-sm px-4 py-2 border-zinc-800 text-zinc-300 hover:bg-rose-950/40 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
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
