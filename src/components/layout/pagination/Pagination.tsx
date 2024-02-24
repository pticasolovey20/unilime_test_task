import { FC } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import styles from './Pagination.module.scss';

type PaginationProps = {
	currentPage: number;
	disablePrev: boolean;
	disableNext: boolean;
	handlePrevPage: () => void;
	handleNextPage: () => void;
};

export const Pagination: FC<PaginationProps> = ({
	currentPage,
	disablePrev,
	disableNext,
	handlePrevPage,
	handleNextPage,
}) => {
	return (
		<div className={styles.container}>
			<button onClick={handlePrevPage} disabled={disablePrev}>
				<MdOutlineChevronLeft size={20} />
			</button>

			<span>{currentPage}</span>

			<button onClick={handleNextPage} disabled={disableNext}>
				<MdOutlineChevronRight size={20} />
			</button>
		</div>
	);
};
