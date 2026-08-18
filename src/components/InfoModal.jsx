import React, { useState } from 'react';

const InfoModal = ({ type, onClose }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const renderContent = () => {
    switch (type) {
      case 'features':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </span>
              <div>
                <h3 className="text-2xl font-black text-white font-display">Product Features</h3>
                <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider">Everything you need to track inventory</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center text-emerald-400 font-bold mb-2 font-display">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  Camera Barcode Scanner
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Scan UPC and EAN barcodes live using your device's camera. Autofills code numbers instantly.
                </p>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center text-emerald-400 font-bold mb-2 font-display">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Smart Expiry Alerts
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Automatic color-coded status badges for Good, Expiring Soon (30 days), and Expired items.
                </p>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center text-emerald-400 font-bold mb-2 font-display">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                  Timeframe Filtering
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Filter items by 1 Month, 3 Months, or 6 Months. Instant search across titles and barcodes.
                </p>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center text-emerald-400 font-bold mb-2 font-display">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                  1-Click Inventory Export
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Download your complete inventory data into standard CSV files for backup or auditing.
                </p>
              </div>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white font-display">Flexible Pricing Plans</h3>
              <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider mt-1">Start free, upgrade as your inventory grows</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-center flex flex-col">
                <h4 className="font-bold text-white font-display">Free Starter</h4>
                <div className="text-2xl font-black text-emerald-400 my-2 font-display">$0 <span className="text-xs text-zinc-500 font-normal">/mo</span></div>
                <p className="text-xs text-zinc-400 mb-4 flex-grow">Up to 50 active items, barcode scanning, basic search.</p>
                <button onClick={onClose} className="btn-secondary text-xs py-2 w-full">Current Plan</button>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-center flex flex-col relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 font-extrabold text-[10px] uppercase px-3 py-0.5 rounded-full font-display">Most Popular</span>
                <h4 className="font-bold text-white font-display">Pro Tracker</h4>
                <div className="text-2xl font-black text-emerald-400 my-2 font-display">$9 <span className="text-xs text-zinc-500 font-normal">/mo</span></div>
                <p className="text-xs text-zinc-400 mb-4 flex-grow">Unlimited items, priority barcode lookup, CSV export.</p>
                <button onClick={onClose} className="btn-primary text-xs py-2 w-full">Get Started</button>
              </div>

              <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-center flex flex-col">
                <h4 className="font-bold text-white font-display">Business Enterprise</h4>
                <div className="text-2xl font-black text-emerald-400 my-2 font-display">$29 <span className="text-xs text-zinc-500 font-normal">/mo</span></div>
                <p className="text-xs text-zinc-400 mb-4 flex-grow">Multi-user team access, API integrations, dedicated support.</p>
                <button onClick={onClose} className="btn-secondary text-xs py-2 w-full">Contact Sales</button>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </span>
              <div>
                <h3 className="text-2xl font-black text-white font-display">Security & Privacy</h3>
                <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider">Enterprise grade data protection</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800">
                <h5 className="font-bold text-white font-display mb-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                  JWT Authentication & HttpOnly Cookies
                </h5>
                <p className="text-zinc-400">User sessions are authenticated with cryptographically signed JSON Web Tokens stored securely.</p>
              </div>

              <div className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800">
                <h5 className="font-bold text-white font-display mb-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                  Bcrypt Salted Hashing
                </h5>
                <p className="text-zinc-400">Passwords are salted and hashed with high-cost Bcrypt before storage. Plaintext credentials are never saved.</p>
              </div>

              <div className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800">
                <h5 className="font-bold text-white font-display mb-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                  Isolated Tenant Ownership
                </h5>
                <p className="text-zinc-400">Every product record is strictly indexed by user ID so your inventory data remains private.</p>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Expiry Tracker Logo" className="w-10 h-10 object-contain rounded-xl border border-emerald-500/40" />
              <div>
                <h3 className="text-2xl font-black text-white font-display">About Expiry Tracker</h3>
                <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider">Eliminating inventory waste worldwide</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white">Expiry Tracker</strong> was created to solve a universal problem: millions of dollars worth of food, pharmaceuticals, and household supplies go to waste every single year simply because expiration dates pass unnoticed.
              </p>
              <p>
                Our platform combines live camera barcode scanning, intuitive expiration date indexing, and automated range filters so individuals and business owners can manage inventory effortlessly.
              </p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </span>
              <div>
                <h3 className="text-2xl font-black text-white font-display">Contact Us</h3>
                <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider">We're here to help you</p>
              </div>
            </div>

            {contactSubmitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl text-center">
                <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">✓</div>
                <h4 className="font-bold text-white font-display text-lg mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-zinc-300 mb-4">Thank you for reaching out. Our support team will get back to you shortly.</p>
                <button onClick={onClose} className="btn-primary text-xs py-2">Close</button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={contactForm.name} 
                    onChange={e => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={contactForm.email} 
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Message</label>
                  <textarea 
                    rows="3" 
                    required 
                    value={contactForm.message} 
                    onChange={e => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-2.5 text-sm">Send Message</button>
              </form>
            )}
          </div>
        );

      case 'privacy':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </span>
              <div>
                <h3 className="text-2xl font-black text-white font-display">Privacy Policy</h3>
                <p className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider">Your data security comes first</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-zinc-300 max-h-60 overflow-y-auto pr-2">
              <p><strong className="text-white">1. Data Collection:</strong> We collect account information (email, encrypted credentials) and inventory product details entered by you to provide tracking services.</p>
              <p><strong className="text-white">2. Barcode Camera Data:</strong> Camera streams used by the barcode scanner are processed strictly in your local browser and are never stored or transmitted to external third parties.</p>
              <p><strong className="text-white">3. Data Ownership:</strong> You retain full ownership of your inventory data. You may export or delete your product records at any time.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {renderContent()}

        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button onClick={onClose} className="btn-secondary text-xs px-4 py-2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
