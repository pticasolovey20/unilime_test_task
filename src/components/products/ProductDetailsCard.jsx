import styles from './Products.module.scss';

export const ProductDetailsCard = ({ price, thumbnail, title, body }) => {
	return (
		<div className={styles.card}>
			<img src={thumbnail} alt={title} />

			<div className={styles.info}>
				<div className={styles.cardRow}>
					<label>Title:</label>
					<span>{title || '-'}</span>
				</div>

				<div className={styles.cardRow}>
					<label>Price:</label>
					<span>{price || '-'}</span>
				</div>

				<div className={styles.cardRow}>
					<label>Body:</label>
					<span>{body || '-'}</span>
				</div>
			</div>
		</div>
	);
};
