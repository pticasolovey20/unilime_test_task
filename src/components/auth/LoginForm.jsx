import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authApi';

import toast from 'react-hot-toast';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: {
			errors: { email: emailError, password: passwordError },
		},
	} = useForm({ mode: 'onChange' });

	const navigate = useNavigate();

	const onSubmit = async (credentials) => {
		try {
			await loginUser(credentials);
			toast.success('You have successfully signed in');
			navigate('/');
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
			<h2>Welcome Back!</h2>

			<div className={styles.formRow}>
				<label>Email</label>

				<input
					id='email'
					name='email'
					type='email'
					placeholder='example@gmail.com'
					{...register('email', {
						required: 'This field is required',
						pattern: {
							value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: 'Invalid email format',
						},
					})}
				/>

				{emailError && <span className={styles.errorMessage}>{emailError.message}</span>}
			</div>

			<div className={styles.formRow}>
				<label>Password</label>

				<input
					id='password'
					name='password'
					type='password'
					placeholder='Enter your password'
					{...register('password', {
						required: 'This field is required',
						minLength: {
							value: 8,
							message: 'Password must contain at least 8 characters',
						},
					})}
				/>

				{passwordError && <span className={styles.errorMessage}>{passwordError.message}</span>}
			</div>

			<button type='submit'>Login</button>
		</form>
	);
};
