import styles from './Products.module.scss';

import { ProductItem } from './ProductItem';

export const ProductsList = ({ products }) => {
	return (
		<div className={styles.listContainer}>
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	);
};
