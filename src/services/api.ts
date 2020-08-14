import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sp-opinions.pierreortega.dev/',
})

export default api;