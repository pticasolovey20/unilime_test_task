import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

import { Layout } from './Layout';

export const ProtectedRoute = () => {
	const { accessToken } = useAuth();

	if (!accessToken) {
		return <Navigate to='/login' />;
	}

	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
