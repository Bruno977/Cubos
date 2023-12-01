import { useContext } from 'react';
import { IconChevronRight } from '../../assets/icons/IconChevronRight';
import {
  ContainerPagination,
  NextButtonPagination,
  Pages,
  PrevButtonPagination,
} from './style';
import { DefaultTheme, ThemeContext } from 'styled-components';
interface PaginationProps {
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, currentPage }: PaginationProps) {
  const { colors } = useContext(ThemeContext) as DefaultTheme;

  let startPage: number;
  let endPage;

  if (pages <= 5) {
    startPage = 1;
    endPage = pages;
  } else {
    const maxPagesBeforeCurrentPage = 2;
    const maxPagesAfterCurrentPage = 2;
    if (Number(currentPage) <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = 5;
    } else if (Number(currentPage) + maxPagesAfterCurrentPage >= pages) {
      startPage = pages - 5 + 1;
      endPage = pages;
    } else {
      startPage = Number(currentPage) - maxPagesBeforeCurrentPage;
      endPage = Number(currentPage) + maxPagesAfterCurrentPage;
    }
  }
  const totalPages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  return (
    <ContainerPagination>
      <PrevButtonPagination
        to={`?page=${Number(currentPage) - 1}`}
        disabled={Number(currentPage) <= 1}
      >
        <IconChevronRight
          color={Number(currentPage) <= 1 ? colors.mauveA9 : colors.white}
        />
      </PrevButtonPagination>
      {totalPages.map((pageNumber) => (
        <Pages
          to={`?page=${pageNumber}`}
          key={pageNumber}
          disabled={Number(currentPage) === pageNumber}
        >
          {pageNumber}
        </Pages>
      ))}
      <NextButtonPagination
        to={`?page=${Number(currentPage) + 1}`}
        disabled={Number(currentPage) >= pages}
      >
        <IconChevronRight
          color={Number(currentPage) >= pages ? colors.mauveA9 : colors.white}
        />
      </NextButtonPagination>
    </ContainerPagination>
  );
}
