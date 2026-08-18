import React, { useState } from 'react';
import Header from '../components/Header';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Contact = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100 font-sans">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}

      <main className="flex-grow max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider font-display inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl font-black text-white font-display tracking-tight mb-3">
            Contact Support & Sales
          </h1>
          <p className="text-zinc-400 text-sm">
            Have questions about Expiry Tracker? Send us a message and our team will respond within 24 hours.
          </p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl shadow-[0_0_25px_rgba(16,185,129,0.5)]">✓</div>
              <h3 className="text-2xl font-black text-white font-display mb-2">Message Sent Successfully!</h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                Thank you for contacting Expiry Tracker. A support specialist will be in touch with you shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary py-2.5 px-6 text-xs">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  required 
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                  placeholder="e.g., Question about Pro Plan features"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Message *</label>
                <textarea 
                  rows="4" 
                  required 
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:border-emerald-400 focus:outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full py-3 text-sm">
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
