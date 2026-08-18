import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Pricing = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider font-display inline-block mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-4">
            Simple Plans for Every Need
          </h1>
          <p className="text-zinc-400 text-lg">
            Whether managing household groceries or large commercial inventory, pick the perfect tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Free Starter */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Free Starter</h3>
              <p className="text-xs text-zinc-400 mb-6">Perfect for personal home inventory tracking.</p>
              <div className="text-4xl font-black text-white font-display mb-6">
                $0 <span className="text-sm text-zinc-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 mb-8 font-medium">
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Up to 50 active items</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Camera Barcode Scanner</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Basic Search & Range Filters</li>
              </ul>
            </div>
            <button onClick={() => navigate(isLoggedIn ? '/dashboard' : '/register')} className="btn-secondary w-full py-3 text-xs">
              Get Started Free
            </button>
          </div>

          {/* Pro Tracker */}
          <div className="bg-zinc-900/90 border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(16,185,129,0.25)] relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full font-display">
              Most Popular
            </span>
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Pro Tracker</h3>
              <p className="text-xs text-zinc-400 mb-6">Designed for busy households & small shops.</p>
              <div className="text-4xl font-black text-emerald-400 font-display mb-6">
                $9 <span className="text-sm text-zinc-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 mb-8 font-medium">
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Unlimited active items</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Instant Camera Barcode Scanner</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Advanced Expiry Date Analytics</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Priority Email Support</li>
              </ul>
            </div>
            <button onClick={() => navigate(isLoggedIn ? '/dashboard' : '/register')} className="btn-primary w-full py-3 text-xs">
              Start 14-Day Free Trial
            </button>
          </div>

          {/* Business Enterprise */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Enterprise</h3>
              <p className="text-xs text-zinc-400 mb-6">For commercial warehouses & supermarkets.</p>
              <div className="text-4xl font-black text-white font-display mb-6">
                $29 <span className="text-sm text-zinc-500 font-normal">/ month</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300 mb-8 font-medium">
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Everything in Pro Plan</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Multi-user team permissions</li>
                <li className="flex items-center"><svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>REST API & Webhooks Access</li>
              </ul>
            </div>
            <button onClick={() => navigate('/contact')} className="btn-secondary w-full py-3 text-xs">
              Contact Sales
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
