import api from './axios.js';
export const getallpropiedades = () => api.get('/propiedad');
export const getAgentsByid = (id) => api.get('/propiedad/${id}');