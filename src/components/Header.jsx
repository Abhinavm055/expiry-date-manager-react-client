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
