import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/fetchProduct';

import toast from 'react-hot-toast';

import { ErrorPage } from '../components/layout/error/ErrorPage';
import { Loading } from '../components/layout/loading/Loading';
import { ProductDetailsCard } from '../components/products/ProductDetailsCard';

export const ProductDetailsPage = () => {
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
			{isLoading && <Loading />}
			{isError && <ErrorPage />}

			{!isLoading && !isError && <ProductDetailsCard {...product} />}
		</section>
	);
};
