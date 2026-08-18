import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Features = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider font-display inline-block mb-4">
            Platform Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-4">
            Designed to Eliminate Expiration Waste
          </h1>
          <p className="text-zinc-400 text-lg">
            Expiry Tracker provides real-time barcode scanning, automated expiry alerts, and powerful range filtering so you never waste valuable inventory again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Camera Barcode Scanner</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Use your smartphone or desktop webcam to scan 1D and 2D product UPC/EAN barcodes in real time. The camera automatically decodes barcode digits to save typing time.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Smart Color-Coded Badges</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every item in your inventory is automatically color-categorized: Emerald Green for fresh items, Amber for items expiring within 30 days, and Rose for expired items.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Range & Regex Search</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Filter products by expiry windows (1 Month, 3 Months, 6 Months). Instant search lets you pinpoint any product by title or UPC barcode in milliseconds.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">Cloud Database Sync</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your product entries are saved securely to your cloud database in real time. Access your inventory state from any desktop or mobile browser.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-500/40 rounded-3xl p-10 text-center relative overflow-hidden">
          <h2 className="text-3xl font-black text-white font-display mb-4">Ready to manage your inventory smarter?</h2>
          <p className="text-zinc-300 text-sm mb-6 max-w-xl mx-auto">Join thousands of users tracking expiration dates and preventing waste.</p>
          <button onClick={() => navigate(isLoggedIn ? '/dashboard' : '/register')} className="btn-primary py-3 px-8 text-sm">
            {isLoggedIn ? 'Go to Dashboard' : 'Get Started for Free'}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
