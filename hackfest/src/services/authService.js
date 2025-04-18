// src/services/authService.js
import axios from '../utils/axiosInstance';

// Register new user
export const register = (userData) => {
  return axios.post('/auth/register', userData);
};

// Login
export const login = (credentials) => {
  return axios.post('/auth/login', credentials);
};

// Get user profile by ID
export const getProfile = (userId) => {
  return axios.get(`/auth/profile?id=${userId}`);
};
