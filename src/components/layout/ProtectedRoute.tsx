import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { KEYS } from '../../utils/localStorage';
import { Layout } from './Layout';

export const ProtectedRoute: FC = () => {
	const accessToken = localStorage.getItem(KEYS.ACCESS_TOKEN);

	if (!accessToken) {
		return <Navigate to='/login' />;
	}

	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
