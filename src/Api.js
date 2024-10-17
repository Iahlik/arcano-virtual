import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Cambia esto si tu API está en otro puerto
});

export default api;
