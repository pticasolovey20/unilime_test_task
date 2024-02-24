import { format } from 'date-fns';

export const formatDate = (inputDate: string): string =>
	inputDate ? format(inputDate, 'yyyy-MM-dd') : '';

export const formatProductDate = (inputDate: string): string =>
	inputDate ? format(inputDate, 'yyyy MMM, dd') : '';
