import { format } from 'date-fns';

export const formatDate = (inputDate) =>
	inputDate ? format(inputDate, 'yyyy-MM-dd') : '';
