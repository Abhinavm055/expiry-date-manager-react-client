import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../api/config';

const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    title: '',
    upcCode: '',
    amountValue: '',
    amountCurrency: 'USD',
    expiryDate: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        upcCode: product.upcCode || '',
        amountValue: product.amount?.value || '',
        amountCurrency: product.amount?.currency || 'USD',
        expiryDate: product.expiryDate ? new Date(product.expiryDate).toISOString().split('T')[0] : ''
      });
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

      const headers = {
        'Content-Type': 'application/json'
      };
      if (token && token !== 'null' && token !== 'undefined') {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/products/${product._id}`, {
        method: 'PUT',
        headers,
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0].msg);
        }
        throw new Error(data.error || data.message || 'Failed to update product');
      }

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100">
      <LoggedInHeader />
      
      <main className="flex-grow max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-zinc-400 hover:text-emerald-400 flex items-center text-sm font-medium mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-extrabold text-white">Edit Product</h1>
          <p className="text-zinc-400 mt-1">Update details for {product.title}</p>
        </div>

        <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-sm">
          {error && (
            <div className="bg-rose-950/60 border border-rose-800/80 text-rose-300 px-4 py-3 rounded-xl text-sm mb-6 flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-1">Product Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white placeholder-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="upcCode" className="block text-sm font-medium text-zinc-300 mb-1">UPC Barcode</label>
                  <input
                    type="text"
                    id="upcCode"
                    name="upcCode"
                    value={formData.upcCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-zinc-950/60 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white placeholder-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-zinc-300 mb-1">Expiration Date *</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Amount *</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      name="amountValue"
                      required
                      value={formData.amountValue}
                      onChange={handleChange}
                      className="flex-grow px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white placeholder-zinc-500 transition-colors"
                    />
                    <select
                      name="amountCurrency"
                      value={formData.amountCurrency}
                      onChange={handleChange}
                      className="w-24 px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white transition-colors cursor-pointer"
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

            <div className="pt-6 border-t border-zinc-800/80 flex justify-end gap-3">
              <button 
                type="button"
                onClick={() => navigate('/dashboard')}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center min-w-[140px]"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProduct;
