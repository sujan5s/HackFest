// src/services/wasteService.js
import axios from '../utils/axiosInstance';

// Sell a waste item (with image upload)
export const sellWaste = (formData) => {
  return axios.post('/waste/sell', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Get all listed waste products
export const getWasteList = () => {
  return axios.get('/waste/list');
};

// Submit order address details
export const submitAddress = (addressData) => {
  return axios.post('/waste/address', addressData);
};
