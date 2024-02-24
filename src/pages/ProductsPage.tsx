import { FC, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/fetchProduct';
import toast from 'react-hot-toast';
import { Filters } from '../components/layout/filters/Filters';
import { ProductsList } from '../components/products/ProductsList';
import { Pagination } from '../components/layout/pagination/Pagination';
import { ProductsSkeleton } from '../components/products/ProductsSkeleton';
import { Empty } from '../components/products/Empty';

export const ProductsPage: FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState(JSON.parse(localStorage.getItem('filters') ?? '{}'));

	const { data, error, isLoading, isError, refetch, isPlaceholderData } = useQuery({
		queryKey: ['products', { page: currentPage, ...filters }],
		queryFn: () => fetchProducts(currentPage, filters),
		placeholderData: keepPreviousData,
	});

	const { data: products } = data || { data: [] };

	const disablePrev = currentPage === 1;
	const disableNext = isPlaceholderData || !data?.next_page_url;

	const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
	const handleNextPage = () => !isPlaceholderData && setCurrentPage((prev) => prev + 1);

	if (isError) toast.error(error.message);

	return (
		<section className='page-container' style={{ flexDirection: 'column', gap: '20px' }}>
			<Filters setFilters={setFilters} setCurrentPage={setCurrentPage} refetch={refetch} />
			{!!products?.length && !isLoading && <ProductsList products={products} />}

			{isLoading && <ProductsSkeleton />}
			{!isLoading && !products?.length && <Empty />}

			{!!products && (
				<Pagination
					currentPage={currentPage}
					disablePrev={disablePrev}
					disableNext={disableNext}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				/>
			)}
		</section>
	);
};
