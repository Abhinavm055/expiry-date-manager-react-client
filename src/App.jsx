import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import MyAccount from './pages/MyAccount';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import GuestRoute from './components/GuestRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestRoute><LandingPage /></GuestRoute>} />
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/add-product" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path="/edit-product" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><MyAccount /></ProtectedRoute>} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/security" element={<Security />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
