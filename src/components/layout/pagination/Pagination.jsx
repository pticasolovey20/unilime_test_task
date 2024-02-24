import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import styles from './Pagination.module.scss';

export const Pagination = ({
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
