import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';

import {
  CurrentPage,
  PaginationButton,
  PaginationWrapper,
} from './Pagination.styled';

export const Pagination = ({
  prevPage,
  nextPage,
  firstPage,
  lastPage,
  totalPages,
  currentPage,
}) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={firstPage}
        disabled={Number(currentPage) === 1 ? true : false}
      >
        <HiChevronDoubleLeft />
      </PaginationButton>
      <PaginationButton
        onClick={prevPage}
        disabled={Number(currentPage) === 1 ? true : false}
      >
        <HiChevronLeft />
      </PaginationButton>

      <CurrentPage>{currentPage}</CurrentPage>

      <PaginationButton
        onClick={nextPage}
        disabled={Number(currentPage) === totalPages ? true : false}
      >
        <HiChevronRight />
      </PaginationButton>
      <PaginationButton
        onClick={lastPage}
        disabled={Number(currentPage) === totalPages ? true : false}
      >
        <HiChevronDoubleRight />
      </PaginationButton>
    </PaginationWrapper>
  );
};
