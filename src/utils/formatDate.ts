import { format } from 'date-fns';

export const formatDate = (inputDate: string | undefined | null): string =>
	inputDate ? format(inputDate, 'yyyy-MM-dd') : '';

export const formatProductDate = (inputDate: string | undefined | null): string =>
	inputDate ? format(inputDate, 'yyyy MMM, dd') : '';
