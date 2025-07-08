import api from './axios.js';
export const getAllUsers = () => api.get('/users');
export const getUsersByid = (id) => api.get('/users/${id}');