import { FC } from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export const LoginPage: FC = () => {
	return (
		<main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<LoginForm />
		</main>
	);
};
