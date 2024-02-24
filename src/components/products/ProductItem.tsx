import { FC } from 'react';
import { Link } from 'react-router-dom';
import { formatProductDate } from '../../utils/formatDate';
import styles from './Products.module.scss';

type ProductItemProps = {
	id: number;
	title: string;
	price: string;
	thumbnail: string;
	created_at?: string;
};

export const ProductItem: FC<ProductItemProps> = ({ id, title, price, thumbnail, created_at }) => {
	return (
		<Link to={`/product/${id}`} className={styles.productContainer}>
			<div className={styles.productItem}>
				<img src={thumbnail} alt={title} />

				<div className={styles.cardDescription}>
					<div>
						<h2>{title}</h2>
						<span>{price}</span>
					</div>

					<span>{formatProductDate(created_at)}</span>
				</div>
			</div>
		</Link>
	);
};
