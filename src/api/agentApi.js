import api from './axios.js';
export const getallagents = () => api.get('/agents');
export const getAgentsByid = (id) => api.get('/agents/${id}');