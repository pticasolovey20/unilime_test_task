import { FC } from 'react';

import styles from './Error.module.scss';

export const ErrorPage: FC = () => {
	return (
		<div className={styles.errorPage}>
			<h2>Ooops..</h2>
		</div>
	);
};
