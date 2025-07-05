import api from './axios.js';
export const getallagents = () => api.get('/users');
export const getAgentsByid = (id) => api.get('/users/${id}');