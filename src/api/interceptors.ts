import { KEYS } from '../utils/localStorage';
import { refreshAccessToken, updateToken } from './authApi';
import { axiosInstance } from './axiosInstance';
import { millisecondsToMinutes } from 'date-fns';

// Request interceptor for API calls

axiosInstance.interceptors.request.use(
	async (config) => {
		let accessToken = localStorage.getItem(KEYS.ACCESS_TOKEN);
		const expirationDate = localStorage.getItem(KEYS.EXPIRATION);
		const timeLeft = parseInt(expirationDate!) - new Date().getTime();

		// update token if expires in 10 minutes
		if (millisecondsToMinutes(timeLeft) <= 10) {
			try {
				const response = await refreshAccessToken();
				const { access_token, expires_in } = response;

				updateToken(access_token, expires_in);
				accessToken = access_token;
			} catch (error) {
				console.log('Failed to refresh token');
			}
		}

		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
		axiosInstance.defaults.headers.common['Accept'] = 'application/json';
		axiosInstance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

		return config;
	},

	(error) => Promise.reject(error)
);

// Response interceptor for API calls

axiosInstance.interceptors.response.use(
	(response) => response,

	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			if (originalRequest.url !== '/auth/refresh') {
				try {
					const response = await refreshAccessToken();
					const { access_token, expires_in } = response;

					updateToken(access_token, expires_in);
					axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

					return axiosInstance(originalRequest);
				} catch (error) {
					return Promise.reject();
				}
			} else {
				localStorage.setItem(KEYS.ACCESS_TOKEN, JSON.stringify(null));
				window.location.pathname = '/login';
			}

			return Promise.reject();
		}

		return Promise.reject(error);
	}
);
