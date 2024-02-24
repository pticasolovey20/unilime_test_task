import { FiltersValues } from '../types';
import { axiosInstance } from './axiosInstance';

export const fetchProducts = async (page: number, filters: FiltersValues) => {
	try {
		const savedFilters = localStorage.getItem('filters');
		const allFilters = { ...JSON.parse(savedFilters ?? '{}'), ...filters };

		const params = { page, ...allFilters };

		const { data } = await axiosInstance.get('/products', {
			params,
		});

		return data;
	} catch (error) {
		throw new Error('An unexpected error occurred. Please try again later');
	}
};

export const fetchProductById = async (id: string | undefined) => {
	try {
		const { data } = await axiosInstance.get(`/products/${id}`);

		return data[0];
	} catch (error) {
		throw new Error('An unexpected error occurred. Please try again later');
	}
};
