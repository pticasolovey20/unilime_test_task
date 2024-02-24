import { FC } from 'react';
import styles from './Loading.module.scss';

export const Loading: FC = () => {
	return (
		<div className={styles.loadingPage}>
			<h2>Loading...</h2>
		</div>
	);
};
