import axios from 'axios';

require('dotenv/config')
const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'http://localhost:3300'
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('authorization');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
