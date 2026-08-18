// API Configuration for local development and Vercel production deployment
export const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/$/, '');
