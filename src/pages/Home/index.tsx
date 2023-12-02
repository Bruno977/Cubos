import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from '../../styles/global';
import { MoviesProps } from '../../types/movies';
import { BackgroundSection, ListMovies, Section } from './style';
import { Search } from '../../components/Search';
import { Pagination } from '../../components/Pagination';
import { useLocation } from 'react-router-dom';

export function Home() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get('page');

  const [movies, setMovies] = useState<MoviesProps['results'][] | null>(null);
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });

  async function getMovies(page: number) {
    try {
      const response = await api.get('/movie/popular', {
        params: {
          language: 'pt-BR',
          page: page ? page : pages.page,
        },
      });
      setMovies(response.data.results);
      setPages({
        page: response.data.page,
        totalPages: response.data.totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies(Number(page));
  }, [page]);
  return (
    <Section>
      <BackgroundSection>
        <div />
      </BackgroundSection>

      <Container>
        <Search />
        {movies && movies.length > 0 && (
          <ListMovies>
            {movies.map((movie) => (
              <li key={movie.id}>
                <img
                  src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
                  alt={movie.original_title}
                />
                <div>
                  <p>{movie.title}</p>
                </div>
              </li>
            ))}
          </ListMovies>
        )}
        <Pagination pages={pages.totalPages} currentPage={pages.page} />
      </Container>
    </Section>
  );
}
