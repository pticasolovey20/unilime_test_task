import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

const accessToken = localStorage.getItem('accessToken');

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
