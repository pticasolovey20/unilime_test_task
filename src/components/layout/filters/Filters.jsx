import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { formatDate } from '../../../utils/formatDate';

import styles from './Filter.module.scss';

export const Filters = ({ setFilters, setCurrentPage, refetch }) => {
	const { register, handleSubmit, setValue, reset } = useForm({ mode: 'onChange' });

	const onSubmit = (formData) => {
		const { from, to } = formData;

		const newFormData = {
			...formData,
			from: formatDate(from),
			to: formatDate(to),
		};

		setCurrentPage(1);
		setFilters(newFormData);
		localStorage.setItem('filters', JSON.stringify(newFormData));
	};

	const handleResetFilters = () => {
		localStorage.removeItem('filters');
		setCurrentPage(1);
		setFilters({});
		refetch();
		reset();
	};

	useEffect(() => {
		const savedFilters = localStorage.getItem('filters');

		if (savedFilters) {
			const parsedFilters = JSON.parse(savedFilters);

			Object.keys(parsedFilters).forEach((key) => {
				setValue(key, parsedFilters[key]);
			});
		}
	}, [setValue]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.filtersForm}>
			<div className={styles.container}>
				<label>From Date</label>
				<input id='from' name='from' type='date' placeholder='From Date' {...register('from')} />
			</div>

			<div className={styles.container}>
				<label>To Date</label>
				<input id='to' name='to' type='date' placeholder='To Date' {...register('to')} />
			</div>

			<div className={styles.container}>
				<label>From Price</label>
				<input
					id='price_from'
					name='price_from'
					type='number'
					placeholder='From Price'
					min={0}
					{...register('price_from', { pattern: /^[0-9]*$/ })}
				/>
			</div>

			<div className={styles.container}>
				<label>To Price</label>
				<input
					id='price_to'
					name='price_to'
					type='number'
					placeholder='To Price'
					min={0}
					{...register('price_to', { pattern: /^[0-9]*$/ })}
				/>
			</div>

			<div className={styles.container}>
				<label>By Title</label>
				<input id='title' name='title' type='text' placeholder='Title' {...register('title')} />
			</div>

			<div className={styles.buttonContainer}>
				<button type='submit'>Apply</button>
				<button type='button' onClick={handleResetFilters}>
					Clear
				</button>
			</div>
		</form>
	);
};
