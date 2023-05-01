import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type':  'application/json, application/pdf, text/plain',
        Authorization:   `Bearer ${localStorage.getItem('token')}`,
    }
});

export default axiosInstance;
