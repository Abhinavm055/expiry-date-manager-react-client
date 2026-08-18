import React from 'react';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Privacy = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider font-display inline-block mb-4">
            Legal & Terms
          </span>
          <h1 className="text-4xl font-black text-white font-display tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Last updated: August 2026. How we collect, process, and protect your information.
          </p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-6 text-xs text-zinc-300 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-white font-display mb-2">1. Information We Collect</h3>
            <p className="text-zinc-400">
              When you register for Expiry Tracker, we collect your email address and an encrypted password hash. When you add products, we collect product titles, optional UPC codes, prices/amounts, and expiration dates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white font-display mb-2">2. Camera & Barcode Data Privacy</h3>
            <p className="text-zinc-400">
              Our Barcode Camera Scanner uses browser WebRTC APIs to process video frames locally on your device. Video feeds are never recorded, uploaded, or transmitted to any server.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white font-display mb-2">3. Data Usage & Ownership</h3>
            <p className="text-zinc-400">
              Your inventory data belongs strictly to you. We do not sell or monetize user data. Your product entries are strictly used to render your dashboard, calculate expiry alerts, and export CSV files upon request.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white font-display mb-2">4. Account Rights & Deletion</h3>
            <p className="text-zinc-400">
              You may edit or delete any product from your dashboard at any time. To request complete account deletion, contact our support team.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
