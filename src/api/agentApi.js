import api from './axios.js';
export const getallagents = () => api.get('/agentes');
export const getAgentsByid = (id) => api.get('/agents/${id}');