import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className={styles.footerContainer}>
				<span>Unilime Test Task</span>
				<span>© All right are reserved {currentYear}</span>
			</div>
		</footer>
	);
};
