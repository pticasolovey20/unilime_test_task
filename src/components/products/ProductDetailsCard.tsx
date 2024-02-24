import { FC } from 'react';
import { formatProductDate } from '../../utils/formatDate';

import styles from './Products.module.scss';

type ProductDetailsCardProps = {
	price: string;
	thumbnail: string;
	title: string;
	body: string;
	created_at: string;
};

export const ProductDetailsCard: FC<ProductDetailsCardProps> = ({
	price,
	thumbnail,
	title,
	body,
	created_at,
}) => {
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

				<div className={styles.cardRow}>
					<label>Date:</label>
					<span>{formatProductDate(created_at) || '-'}</span>
				</div>
			</div>
		</div>
	);
};
