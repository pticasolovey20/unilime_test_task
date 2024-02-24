import { KEYS } from '../utils/localStorage';
import { Credentials, TokenResponse, User } from '../types';
import { axiosInstance } from './axiosInstance';

export const updateToken = (token: string, expiresIn: number) => {
	const currentDate = new Date();
	const timestamp = currentDate.getTime() + expiresIn * 1000;

	localStorage.setItem(KEYS.EXPIRATION, JSON.stringify(timestamp));
	localStorage.setItem(KEYS.ACCESS_TOKEN, token);
	axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	return true;
};

export const refreshAccessToken = async (): Promise<TokenResponse> => {
	try {
		const { data } = await axiosInstance.post('/auth/refresh');
		return data;
	} catch (error) {
		throw new Error('Failed to refresh access token.');
	}
};

export const loginUser = async (credentials: Credentials): Promise<TokenResponse> => {
	try {
		const { data } = await axiosInstance.post('/auth/login', credentials);
		const accessToken = data.access_token;

		axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
		localStorage.setItem('accessToken', accessToken);

		return data;
	} catch (error: any) {
		if (error.response.status >= 500 && error.response.status < 600) {
			throw new Error('Internal server error. Please try again later');
		} else {
			throw new Error('Failed to log in. Please check your credentials and try again.');
		}
	}
};

export const logoutUser = async (): Promise<string> => {
	try {
		const { data } = await axiosInstance.post('/auth/logout');

		delete axiosInstance.defaults.headers.common['Authorization'];
		localStorage.removeItem('accessToken');

		return data.message;
	} catch (error) {
		throw new Error('Failed to log out. Please try again later.');
	}
};

export const getUser = async (): Promise<User> => {
	try {
		const { data } = await axiosInstance.get('/auth/user-profile');
		return data;
	} catch (error) {
		throw new Error('The session has expired. Please sign in again');
	}
};
