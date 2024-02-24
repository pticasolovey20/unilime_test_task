import { Link } from 'react-router-dom';

import styles from './Products.module.scss';

export const ProductItem = ({ id, title, price, thumbnail }) => {
	return (
		<Link to={`/product/${id}`} className={styles.productContainer}>
			<div className={styles.productItem}>
				<img src={thumbnail} alt={title} />

				<div className={styles.cardDescription}>
					<h2>{title}</h2>
					<span>{price}</span>
				</div>
			</div>
		</Link>
	);
};
