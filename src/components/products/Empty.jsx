import styles from './Products.module.scss';

export const Empty = () => {
	return (
		<div className={styles.emptyPage}>
			<h2>Nothing found</h2>
		</div>
	);
};
