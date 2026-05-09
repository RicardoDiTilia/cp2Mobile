import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.set('X-App-Name', 'ReactNativeClass');
    console.log('Request:', config.method, config.url);
    return config;
  },
  (error: AxiosError) => {
    console.log('Request Error:', error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response:', response.status);
    return response;
  },
  (error: AxiosError) => {
    console.log('Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);
