import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../api/config';

const LoggedInHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
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
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href="https://github.com/Abhinavm055/expiry-date-manager-react-client"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm font-semibold text-zinc-300 hover:text-emerald-400 font-display transition-all group px-2.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 shadow-sm"
              title="GitHub Repository (Abhinavm055)"
            >
              <svg className="w-4 h-4 fill-current text-zinc-400 group-hover:text-emerald-400 mr-1.5 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Abhinavm055</span>
            </a>

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
