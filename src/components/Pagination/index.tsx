import React, { useContext } from 'react';
import { IconChevronRight } from '../../assets/icons/IconChevronRight';
import {
  ContainerPagination,
  NextButtonPagination,
  Pages,
  PrevButtonPagination,
} from './style';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import useMedia from '../../hooks/useMedia';
interface PaginationProps {
  pages: number;
  currentPage: number;
}

export function Pagination({ pages, currentPage }: PaginationProps) {
  const isMobile = useMedia('(max-width: 1024px)');

  const { colors } = useContext(ThemeContext) as DefaultTheme;
  const { search } = useLocation();
  const parse = qs.parse(search, { ignoreQueryPrefix: true });
  delete parse.page;
  const query = qs.stringify(parse);

  let startPage: number;
  let endPage: number;

  let pagesToShow = isMobile ? 3 : 5;

  if (pages <= pagesToShow) {
    startPage = 1;
    endPage = pages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(pagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(pagesToShow / 2) - 1;
    if (Number(currentPage) <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = pagesToShow;
    } else if (Number(currentPage) + maxPagesAfterCurrentPage >= pages) {
      startPage = pages - pagesToShow + 1;
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
        to={`${query ? '?' + query + '&' : '?'}page=${Number(currentPage) - 1}`}
        disabled={Number(currentPage) <= 1}
      >
        <IconChevronRight
          color={Number(currentPage) <= 1 ? colors.mauveA9 : colors.white}
        />
      </PrevButtonPagination>
      {totalPages.map((pageNumber, index) => (
        <React.Fragment key={pageNumber}>
          {index === 0 && startPage > 1 && isMobile && (
            <Pages
              to={`${query ? '?' + query + '&' : '?'}page=${Math.max(
                pageNumber - pagesToShow,
                1
              )}`}
            >
              ...
            </Pages>
          )}
          <Pages
            to={`${query ? '?' + query + '&' : '?'}page=${pageNumber}`}
            disabled={Number(currentPage) === pageNumber}
          >
            {pageNumber}
          </Pages>
          {index === totalPages.length - 1 && endPage < pages && isMobile && (
            <Pages
              to={`${query ? '?' + query + '&' : '?'}page=${Math.min(
                pageNumber + pagesToShow,
                pages
              )}`}
            >
              ...
            </Pages>
          )}
        </React.Fragment>
      ))}
      <NextButtonPagination
        to={`${query ? '?' + query + '&' : '?'}page=${Number(currentPage) + 1}`}
        disabled={Number(currentPage) >= pages}
      >
        <IconChevronRight
          color={Number(currentPage) >= pages ? colors.mauveA9 : colors.white}
        />
      </NextButtonPagination>
    </ContainerPagination>
  );
}

{
  /* <Pages
to={`${query ? '?' + query + '&' : '?'}page=${pageNumber}`}
key={pageNumber}
disabled={Number(currentPage) === pageNumber}
>
<span>{index === 0 && startPage > 1 && '...'}</span>
{pageNumber}
<span>
  {index === totalPages.length - 1 && endPage < pages && '...'}
</span>
</Pages> */
}
