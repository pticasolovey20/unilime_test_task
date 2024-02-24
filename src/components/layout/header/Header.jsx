import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../api/authApi';

import toast from 'react-hot-toast';

import styles from './Header.module.scss';

const navigation = [
	{ id: 1, route: '/', label: 'Home' },
	{ id: 2, route: '/profile', label: 'Profile' },
];

export const Header = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			const message = await logoutUser();

			toast.success(message);
			navigate('/login');
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<header>
			<div className={styles.headerContainer}>
				<nav>
					<ul className={styles.navigation}>
						{navigation.map(({ id, route, label }) => (
							<li key={id}>
								<NavLink
									to={route}
									className={({ isActive }) => (isActive ? styles.activeLink : '')}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<button className={styles.logoutButton} onClick={handleLogout}>
					Log out
				</button>
			</div>
		</header>
	);
};
