import { useContext } from 'react';
import { IconChevronRight } from '../../assets/icons/IconChevronRight';
import {
  ContainerPagination,
  NextButtonPagination,
  Pages,
  PrevButtonPagination,
} from './style';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';
interface PaginationProps {
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, currentPage }: PaginationProps) {
  const { colors } = useContext(ThemeContext) as DefaultTheme;
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchParams = queryParams.get('search');

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
        to={`${searchParams ? '?search=' + searchParams + '&' : '?'}page=${
          Number(currentPage) - 1
        }`}
        disabled={Number(currentPage) <= 1}
      >
        <IconChevronRight
          color={Number(currentPage) <= 1 ? colors.mauveA9 : colors.white}
        />
      </PrevButtonPagination>
      {totalPages.map((pageNumber) => (
        <Pages
          to={`${
            searchParams ? '?search=' + searchParams + '&' : '?'
          }page=${pageNumber}`}
          key={pageNumber}
          disabled={Number(currentPage) === pageNumber}
        >
          {pageNumber}
        </Pages>
      ))}
      <NextButtonPagination
        to={`${searchParams ? '?search=' + searchParams + '&' : '?'}page=${
          Number(currentPage) + 1
        }`}
        disabled={Number(currentPage) >= pages}
      >
        <IconChevronRight
          color={Number(currentPage) >= pages ? colors.mauveA9 : colors.white}
        />
      </NextButtonPagination>
    </ContainerPagination>
  );
}
