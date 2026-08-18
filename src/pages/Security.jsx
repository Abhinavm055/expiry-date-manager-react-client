import React from 'react';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Security = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider font-display inline-block mb-4">
            Security & Compliance
          </span>
          <h1 className="text-4xl font-black text-white font-display tracking-tight mb-3">
            Enterprise Grade Data Security
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Your inventory data and account credentials are protected with industry-leading encryption standards.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-400 mr-3"></span>
              JWT Token Authentication
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sessions are managed with cryptographically signed JSON Web Tokens. Bearer headers and HttpOnly cookie headers ensure protection against cross-site scripting (XSS) and session hijacking.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-400 mr-3"></span>
              Bcrypt Password Hashing
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              User passwords are salted and hashed using Bcrypt before saving to MongoDB. Raw plaintext passwords are never logged, stored, or exposed.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-400 mr-3"></span>
              Strict Data Isolation & Indexing
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Database schema enforces strict Mongoose ObjectId filtering on every product endpoint. Users can only access, search, edit, or delete inventory records tied directly to their user ID.
            </p>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-emerald-400 mr-3"></span>
              Camera Stream Privacy
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The camera barcode scanner operates completely client-side in your Web Browser using WebRTC HTML5 APIs. Video frames are processed locally and are never stored or transmitted to external servers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;
