import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/fetchProduct';
import toast from 'react-hot-toast';
import { ProductDetailsCard } from '../components/products/ProductDetailsCard';
import { Loading } from '../components/layout/loading/Loading';
import { Empty } from '../components/products/Empty';

export const ProductDetailsPage: FC = () => {
	const { id } = useParams();

	const {
		data: product,
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['product'],
		queryFn: () => fetchProductById(id),
	});

	if (isError) toast.error(error.message);

	return (
		<section className='page-container'>
			{isLoading && !isError && <Loading />}
			{!isLoading && !product && <Empty />}

			{!isLoading && !isError && <ProductDetailsCard {...product} />}
		</section>
	);
};
