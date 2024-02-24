import { format } from 'date-fns';

export const formatDate = (inputDate) => (inputDate ? format(inputDate, 'yyyy-MM-dd') : '');

export const formatProductDate = (inputDate) =>
	inputDate ? format(inputDate, 'yyyy MMM, dd') : '';
