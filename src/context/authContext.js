import { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [accessToken /*setAccessToken*/] = useState(localStorage.getItem('accessToken'));

	useEffect(() => {
		if (accessToken) {
			axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
			localStorage.setItem('accessToken', accessToken);
		} else {
			delete axiosInstance.defaults.headers.common['Authorization'];
			localStorage.removeItem('accessToken');
		}
	}, [accessToken]);

	return <AuthContext.Provider value={{ accessToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
