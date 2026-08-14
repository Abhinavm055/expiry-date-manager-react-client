import React from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LoggedInHeader />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8 animate-fade-in-up">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage your inventory and track expiration dates.</p>
          </div>
          <button className="btn-primary flex items-center shadow-primary/25 shadow-md">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            Add Product
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-8 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-1">No products yet</h3>
          <p className="text-slate-500 mb-6">Get started by adding a product to track its expiration date.</p>
          <button className="btn-secondary">
            Scan Barcode
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
