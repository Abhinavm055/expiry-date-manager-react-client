import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    // If user is already logged in, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children ? children : <Outlet />;
};

export default GuestRoute;
