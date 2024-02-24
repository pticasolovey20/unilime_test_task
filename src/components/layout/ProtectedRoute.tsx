import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import { Layout } from './Layout';

export const ProtectedRoute: FC = () => {
	const accessToken = useAuth();

	if (!accessToken && !localStorage.getItem('accessToken')) {
		return <Navigate to='/login' />;
	}

	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
