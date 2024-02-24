import { FC } from 'react';
import { Product } from '../../types';

import { ProductItem } from './ProductItem';

import styles from './Products.module.scss';

type ProductListProps = {
	products: Product[];
};

export const ProductsList: FC<ProductListProps> = ({ products }) => {
	return (
		<div className={styles.listContainer}>
			{products.map((product) => (
				<ProductItem key={product.id} {...product} />
			))}
		</div>
	);
};
