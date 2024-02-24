import { FC } from 'react';

import styles from './Products.module.scss';

export const Empty: FC = () => {
	return (
		<div className={styles.emptyPage}>
			<h2>Nothing found</h2>
		</div>
	);
};
