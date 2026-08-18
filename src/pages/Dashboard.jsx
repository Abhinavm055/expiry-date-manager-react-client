import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoggedInHeader from '../components/LoggedInHeader';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../api/config';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams({
        page,
        limit: 20
      });
      
      if (search) queryParams.append('search', search);
      if (expiresIn) queryParams.append('expiresIn', expiresIn);

      const response = await fetch(`${API_BASE_URL}/products?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, expiresIn]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const exp = new Date(expiryDate);
    const diffTime = exp - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleEdit = (product) => {
    navigate('/edit-product', { state: { product } });
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/products/${productToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      
      setProductToDelete(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert('Error deleting product');
    } finally {
      setIsDeleting(false);
    }
  };

  // Metrics
  const totalCount = products.length;
  const expiredCount = products.filter(p => getDaysUntilExpiry(p.expiryDate) < 0).length;
  const expiringSoonCount = products.filter(p => {
    const d = getDaysUntilExpiry(p.expiryDate);
    return d >= 0 && d <= 30;
  }).length;
  const goodCount = totalCount - expiredCount - expiringSoonCount;

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-zinc-100">
      <LoggedInHeader />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight font-display">Dashboard</h1>
            <p className="text-zinc-400 mt-1 text-sm">Manage your inventory and track expiration dates effortlessly.</p>
          </div>
          <Link to="/add-product" className="btn-primary flex items-center justify-center text-sm py-2.5 w-full sm:w-auto">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
            Add Product
          </Link>
        </div>

        {/* Inventory Summary Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 shadow-md">
            <div className="text-xs text-zinc-400 font-semibold font-display uppercase tracking-wider mb-1">Total Products</div>
            <div className="text-2xl font-black text-white font-display">{totalCount}</div>
          </div>
          <div className="bg-zinc-900/80 p-4 rounded-2xl border border-emerald-500/30 shadow-md">
            <div className="text-xs text-emerald-400 font-semibold font-display uppercase tracking-wider mb-1">Good Condition</div>
            <div className="text-2xl font-black text-emerald-400 font-display">{goodCount}</div>
          </div>
          <div className="bg-zinc-900/80 p-4 rounded-2xl border border-amber-500/30 shadow-md">
            <div className="text-xs text-amber-400 font-semibold font-display uppercase tracking-wider mb-1">Expiring Soon</div>
            <div className="text-2xl font-black text-amber-400 font-display">{expiringSoonCount}</div>
          </div>
          <div className="bg-zinc-900/80 p-4 rounded-2xl border border-rose-500/30 shadow-md">
            <div className="text-xs text-rose-400 font-semibold font-display uppercase tracking-wider mb-1">Expired Items</div>
            <div className="text-2xl font-black text-rose-400 font-display">{expiredCount}</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 mb-6 flex flex-col sm:flex-row gap-4 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          <div className="relative flex-grow">
            <svg className="w-5 h-5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search by title or UPC code..." 
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm text-white placeholder-zinc-500 transition-colors"
            />
          </div>
          <select 
            value={expiresIn}
            onChange={(e) => { setExpiresIn(e.target.value); setPage(1); }}
            className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm text-white transition-colors cursor-pointer font-display font-semibold"
          >
            <option value="">All Expiry Dates</option>
            <option value="1m">Expires in 1 Month</option>
            <option value="3m">Expires in 3 Months</option>
            <option value="6m">Expires in 6 Months</option>
          </select>
        </div>

        {error && (
          <div className="bg-rose-950/60 border border-rose-800/80 text-rose-300 px-4 py-3 rounded-xl text-sm mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-400"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-12 text-center shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <div className="w-16 h-16 bg-zinc-950 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-display">No products found</h3>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto text-sm">Get started by adding a product to track its expiration date, or try adjusting your search filters.</p>
            <Link to="/add-product" className="btn-primary inline-block">
              Add Product
            </Link>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => {
                const days = getDaysUntilExpiry(product.expiryDate);
                const isExpired = days < 0;
                const isExpiringSoon = days >= 0 && days <= 30;
                
                return (
                  <div key={product._id} className="bg-zinc-900/90 rounded-2xl border border-zinc-800/90 p-6 relative overflow-hidden group hover:border-emerald-500/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300">
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${isExpired ? 'bg-rose-500' : isExpiringSoon ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                    
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-lg text-white line-clamp-1 pr-4 group-hover:text-emerald-300 transition-colors font-display">{product.title}</h3>
                      <div className="flex space-x-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEdit(product)} className="p-1.5 text-zinc-400 hover:text-emerald-400 rounded-lg hover:bg-zinc-800 transition-colors" title="Edit Product">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        </button>
                        <button onClick={() => setProductToDelete(product)} className="p-1.5 text-zinc-400 hover:text-rose-400 rounded-lg hover:bg-zinc-800 transition-colors" title="Delete Product">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-sm text-zinc-400 mb-5 space-y-2">
                      {product.upcCode && (
                        <p className="flex items-center text-zinc-400">
                          <svg className="w-4 h-4 mr-2 text-emerald-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                          UPC: <span className="font-mono text-zinc-300 ml-1">{product.upcCode}</span>
                        </p>
                      )}
                      <p className="flex items-center text-zinc-400">
                        <svg className="w-4 h-4 mr-2 text-emerald-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Amount: <span className="font-semibold text-zinc-200 ml-1">{product.amount?.value} {product.amount?.currency}</span>
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between font-bold text-xs tracking-wider uppercase font-display">
                      <span className={`px-3 py-1 rounded-full border ${isExpired ? 'bg-rose-950/60 text-rose-400 border-rose-800/60' : isExpiringSoon ? 'bg-amber-950/60 text-amber-400 border-amber-800/60' : 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'}`}>
                        {isExpired ? 'Expired' : isExpiringSoon ? 'Expiring soon' : 'Good condition'}
                      </span>
                      <span className="text-zinc-400">
                        {new Date(product.expiryDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-3 pb-8 font-display">
                <button 
                  onClick={() => handlePageChange(page - 1)} 
                  disabled={page === 1}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-zinc-400 font-medium px-4">
                  Page {page} of {totalPages}
                </span>
                <button 
                  onClick={() => handlePageChange(page + 1)} 
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col p-6">
            <div className="w-12 h-12 bg-rose-950/80 text-rose-400 border border-rose-800/60 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-center font-extrabold text-lg text-white mb-2 font-display">Delete Product</h3>
            <p className="text-center text-zinc-400 mb-6 text-sm">
              Are you sure you want to delete <span className="font-semibold text-zinc-200">{productToDelete.title}</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3 font-display">
              <button 
                onClick={() => setProductToDelete(null)}
                disabled={isDeleting}
                className="flex-1 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl font-semibold hover:bg-zinc-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                disabled={isDeleting}
                className="flex-1 py-2.5 bg-rose-600 text-white rounded-xl font-extrabold hover:bg-rose-500 transition-colors flex justify-center items-center"
              >
                {isDeleting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
