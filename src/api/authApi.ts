import { Credentials, RefreshTokenResponse, User } from '../types';
import { axiosInstance } from './axiosInstance';

export const refreshAccessToken = async (): Promise<string> => {
	const { data } = await axiosInstance.post<RefreshTokenResponse>('/auth/refresh');

	return data.access_token;
};

// In case of 401 status code error, for some reason it causes endless /auth/refresh request

// axiosInstance.interceptors.response.use(
// 	async (response) => response,

// 	async (error) => {
// 		const originalRequest = error.config;
// 		const errorStatus = error.response.status;

// 		if (errorStatus === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;

// 			try {
// 				const accessToken = await refreshAccessToken();
// 				axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;

// 				return axiosInstance(originalRequest);
// 			} catch (error) {
// 				console.error('Failed to refresh access token', error);
// 			}
// 		}

// 		return Promise.reject(error);
// 	}
// );

axiosInstance.interceptors.response.use(
	async (response) => response,

	async (error) => {
		const originalRequest = error.config;
		const errorStatus = error.response.status;

		if (errorStatus === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			localStorage.removeItem('accessToken');
			window.location.href = '/login';
		}

		return Promise.reject(error);
	}
);

export const loginUser = async (credentials: Credentials): Promise<void> => {
	const { data } = await axiosInstance.post('/auth/login', credentials);

	const accessToken = data.access_token;
	axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
	localStorage.setItem('accessToken', accessToken);
};

export const logoutUser = async (): Promise<string> => {
	const { data } = await axiosInstance.post('/auth/logout');

	delete axiosInstance.defaults.headers.common['Authorization'];
	localStorage.removeItem('accessToken');

	return data.message;
};

export const getUser = async (): Promise<User> => {
	try {
		const { data } = await axiosInstance.get('/auth/user-profile');

		return data;
	} catch (error) {
		throw new Error('An unexpected error occurred. Please try again later');
	}
};
