import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './components/layout/ProtectedRoute';

import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProfilePage } from './pages/ProfilePage';

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />

			<Route path='/' element={<ProtectedRoute />}>
				<Route path='/' element={<ProductsPage />} />
				<Route path='/product/:id' element={<ProductDetailsPage />} />
				<Route path='/profile' element={<ProfilePage />} />
			</Route>
		</Routes>
	);
};
