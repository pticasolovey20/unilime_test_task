import { FC } from 'react';
import { ProductItem } from './ProductItem';
import styles from './Products.module.scss';

export const ProductsSkeleton: FC = () => {
	return (
		<div className={styles.listContainer}>
			{Array.from({ length: 6 }).map((_, index) => (
				<ProductItem
					key={index}
					id={index + 1}
					price=''
					title=''
					thumbnail={'https://dummyimage.com/900x497/f4f4f4/DADADA.jpg&text=skeletenon'}
				/>
			))}
		</div>
	);
};
