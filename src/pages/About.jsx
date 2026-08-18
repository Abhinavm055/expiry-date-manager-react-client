import React from 'react';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const About = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <img src="/logo.png" alt="Expiry Tracker Logo" className="w-20 h-20 object-contain rounded-2xl border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.3)] mx-auto mb-6" />
          <h1 className="text-4xl font-black text-white font-display tracking-tight mb-3">
            About Expiry Tracker
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Our mission is simple: eliminate inventory waste and empower people to manage their products with ease.
          </p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl space-y-6 text-sm text-zinc-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800/80 pb-3">The Problem We Are Solving</h2>
          <p>
            Every single year, over <strong className="text-white">1.3 billion tons</strong> of food and perishables are thrown away globally due to forgotten expiration dates. Whether in households, medical clinics, or retail store backrooms, items sit unused until it is too late.
          </p>

          <h2 className="text-2xl font-bold text-white font-display border-b border-zinc-800/80 pb-3">Our Technology</h2>
          <p>
            <strong className="text-emerald-400">Expiry Tracker</strong> combines instant camera barcode scanning, database indexing, and color-coded status badges so users can check inventory health at a glance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div className="text-3xl font-black text-emerald-400 font-display">100%</div>
              <div className="text-xs text-zinc-400 mt-1">Real-Time Cloud Sync</div>
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div className="text-3xl font-black text-emerald-400 font-display">0s</div>
              <div className="text-xs text-zinc-400 mt-1">Camera Barcode Scan Time</div>
            </div>
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div className="text-3xl font-black text-emerald-400 font-display">$0</div>
              <div className="text-xs text-zinc-400 mt-1">Free Forever Tier</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
