import axios, {AxiosRequestConfig} from "axios"
import { API_URL } from "./config"

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add configuration for form-data when sending images
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = localStorage.getItem('user_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Ensure PATCH requests are properly handled
    if (config.method?.toLowerCase() === 'patch') {
        config.headers['Content-Type'] = 'application/json';
    }
    // Handle file uploads
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;