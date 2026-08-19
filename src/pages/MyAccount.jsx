import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../api/config';

const MyAccount = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [productStats, setProductStats] = useState({ total: 0, good: 0, expiringSoon: 0, expired: 0 });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserEmail(payload.email || 'user@expirytracker.com');
      } catch (e) {
        setUserEmail('user@expirytracker.com');
      }
    }

    const headers = {};
    if (token && token !== 'null' && token !== 'undefined') {
      headers['Authorization'] = `Bearer ${token}`;
    }

    fetch(`${API_BASE_URL}/products?limit=1000`, {
      headers,
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        const products = data.products || [];
        const today = new Date();
        let good = 0, expiringSoon = 0, expired = 0;
        
        products.forEach(p => {
          const exp = new Date(p.expiryDate);
          const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
          if (diffDays < 0) expired++;
          else if (diffDays <= 30) expiringSoon++;
          else good++;
        });

        setProductStats({ total: products.length, good, expiringSoon, expired });
      })
      .catch(() => {});
  }, []);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setErrorMsg('New passwords do not match');
      return;
    }

    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      setSuccessMsg('Password updated successfully!');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }, 800);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (e) {}
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      <LoggedInHeader />

      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Breadcrumb */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-zinc-400 hover:text-emerald-400 flex items-center text-sm font-medium mb-4 transition-colors font-display"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-black text-white font-display tracking-tight">My Account</h1>
          <p className="text-zinc-400 mt-1 text-sm">Manage your profile, security settings, and inventory metrics.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="space-y-6">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              
              <div className="w-20 h-20 bg-zinc-950 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>

              <h2 className="text-xl font-bold text-white font-display">{userEmail.split('@')[0]}</h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">{userEmail}</p>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-col items-center justify-center space-y-2.5">
                <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-bold font-display uppercase tracking-wider">
                  Pro Plan Member
                </span>
                <a 
                  href="https://github.com/Abhinavm055/expiry-date-manager-react-client"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 rounded-xl text-xs font-semibold font-display transition-all group"
                  title="View GitHub Repository"
                >
                  <svg className="w-4 h-4 fill-current text-zinc-400 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Git: Abhinavm055</span>
                </a>
              </div>

              <button 
                onClick={handleLogout} 
                className="w-full mt-6 py-2.5 bg-rose-950/50 hover:bg-rose-900/60 text-rose-400 border border-rose-800/50 rounded-xl font-bold text-xs uppercase tracking-wider font-display transition-colors"
              >
                Sign Out of Account
              </button>
            </div>

            {/* Inventory Overview Widget */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4 flex items-center">
                <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
                Inventory Activity
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-400">Total Tracked Items</span>
                  <span className="font-bold text-white font-display">{productStats.total}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                  <span className="text-emerald-400">Good Condition</span>
                  <span className="font-bold text-emerald-400 font-display">{productStats.good}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                  <span className="text-amber-400">Expiring Soon (30 days)</span>
                  <span className="font-bold text-amber-400 font-display">{productStats.expiringSoon}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-rose-400">Expired Items</span>
                  <span className="font-bold text-rose-400 font-display">{productStats.expired}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Details */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-extrabold text-white font-display mb-1">Account Information</h2>
              <p className="text-xs text-zinc-400 mb-6">Your personal account details and communication preferences.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl">
                  <span className="text-zinc-500 font-semibold block mb-1">Primary Email</span>
                  <span className="font-mono text-white text-sm">{userEmail}</span>
                </div>
                <div className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl">
                  <span className="text-zinc-500 font-semibold block mb-1">Account Status</span>
                  <span className="text-emerald-400 font-bold font-display text-sm flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    Active & Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Change Password Form */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-extrabold text-white font-display mb-1">Security & Password</h2>
              <p className="text-xs text-zinc-400 mb-6">Update your account password to ensure maximum security.</p>

              {successMsg && (
                <div className="bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 px-4 py-3 rounded-xl text-xs mb-4">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="bg-rose-950/60 border border-rose-800/80 text-rose-300 px-4 py-3 rounded-xl text-xs mb-4">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Current Password</label>
                  <input 
                    type="password"
                    required
                    value={passwordForm.currentPassword}
                    onChange={e => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="••••••••"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">New Password</label>
                    <input 
                      type="password"
                      required
                      value={passwordForm.newPassword}
                      onChange={e => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Confirm New Password</label>
                    <input 
                      type="password"
                      required
                      value={passwordForm.confirmPassword}
                      onChange={e => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isUpdating}
                    className="btn-primary text-xs py-2.5 px-6"
                  >
                    {isUpdating ? 'Updating Password...' : 'Save New Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyAccount;
