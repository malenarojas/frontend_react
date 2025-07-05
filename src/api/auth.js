import api from './axios.js';
export const login = () => api.post('/login/');
export const logout = (id) => api.post('/logout/');