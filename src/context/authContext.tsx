import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';

type AuthContextType = {
	accessToken: string | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [accessToken /*setAccessToken*/] = useState<string | null>(
		localStorage.getItem('accessToken')
	);

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
