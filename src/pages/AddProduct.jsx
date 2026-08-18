import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';
import BarcodeScanner from '../components/BarcodeScanner';

const AddProduct = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    upcCode: '',
    amountValue: '',
    amountCurrency: 'USD',
    expiryDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScanResult = (decodedText) => {
    setFormData(prev => ({
      ...prev,
      upcCode: decodedText
    }));
    setIsScanning(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      
      const payload = {
        title: formData.title,
        upcCode: formData.upcCode,
        amount: {
          value: Number(formData.amountValue),
          currency: formData.amountCurrency
        },
        expiryDate: new Date(formData.expiryDate).toISOString()
      };

      const response = await fetch('http://localhost:5001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0].msg);
        }
        throw new Error(data.error || 'Failed to add product');
      }

      // Success
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LoggedInHeader />
      
      <main className="flex-grow max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 animate-fade-in-up">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-slate-500 hover:text-primary flex items-center text-sm font-medium mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-slate-900">Add Product</h1>
          <p className="text-slate-500 mt-1">Track a new item's expiration date in your inventory.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft border border-slate-100 p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6 flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Product Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary transition-colors text-slate-800"
                    placeholder="e.g., Organic Milk"
                  />
                </div>

                <div>
                  <label htmlFor="upcCode" className="block text-sm font-medium text-slate-700 mb-1">UPC Barcode</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="upcCode"
                      name="upcCode"
                      value={formData.upcCode}
                      onChange={handleChange}
                      className="flex-grow px-4 py-2 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary transition-colors text-slate-800"
                      placeholder="Enter or scan code"
                    />
                    <button 
                      type="button"
                      onClick={() => setIsScanning(true)}
                      className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg border border-slate-200 flex items-center transition-colors"
                      title="Scan Barcode"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-slate-700 mb-1">Expiration Date *</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary transition-colors text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Amount *</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      name="amountValue"
                      required
                      value={formData.amountValue}
                      onChange={handleChange}
                      className="flex-grow px-4 py-2 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary transition-colors text-slate-800"
                      placeholder="e.g., 2.5"
                    />
                    <select
                      name="amountCurrency"
                      value={formData.amountCurrency}
                      onChange={handleChange}
                      className="w-24 px-4 py-2 border border-slate-200 rounded-lg focus:ring-primary focus:border-primary transition-colors text-slate-800 bg-white"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="INR">INR</option>
                      <option value="LBS">LBS</option>
                      <option value="KG">KG</option>
                      <option value="ITEMS">ITEMS</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
              <button 
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center min-w-[140px]"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  'Save Product'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />

      {/* Barcode Scanner Modal */}
      {isScanning && (
        <BarcodeScanner 
          onResult={handleScanResult} 
          onClose={() => setIsScanning(false)}
          onError={(err) => console.log('Scan warning:', err)}
        />
      )}
    </div>
  );
};

export default AddProduct;
