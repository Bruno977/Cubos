import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from '../../styles/global';
import { MoviesProps } from '../../types/movies';
import {
  ContainerRating,
  MovieDescription,
  ListMovies,
  Section,
  ContainerMovies,
} from './style';
import { Search } from '../../components/Search';
import { Pagination } from '../../components/Pagination';
import { Link, useLocation } from 'react-router-dom';
import { GenresProps } from '../../types/genres';
import { Rating } from '../../components/Rating';

import { BackgroundSection } from '../../components/BackgroundSection';

export function Home() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get('page');
  const searchParams = queryParams.get('search');

  const [movies, setMovies] = useState<MoviesProps['results'][] | null>(null);
  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });
  const [genres, setGenres] = useState<GenresProps[] | null>(null);

  async function getGenres() {
    try {
      const response = await api.get('/genre/movie/list', {
        params: {
          language: 'pt-BR',
        },
      });
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMovies(page: number) {
    try {
      console.log(page);
      const response = await api.get('/movie/popular', {
        params: {
          language: 'pt-BR',
          page: page > 0 ? page : 1,
        },
      });
      setMovies(response.data.results);
      setPages({
        page: response.data.page,
        totalPages: response.data.total_pages,
      });
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSearchMovie(value: string, page: number) {
    try {
      const response = await api.get('/search/movie', {
        params: {
          query: value,
          language: 'pt-BR',
          page: page > 0 ? page : 1,
        },
      });

      setMovies(response.data.results);
      setPages({
        page: response.data.page,
        totalPages: response.data.total_pages,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (searchParams) {
      handleSearchMovie(searchParams, Number(page));
    }
    if (!searchParams) {
      getMovies(Number(page));
    }
  }, [page, searchParams]);
  return (
    <Section>
      <BackgroundSection />
      <Container>
        <Search />
      </Container>
      <ContainerMovies>
        {movies && movies.length > 0 && (
          <ListMovies>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/detalhes/${movie.id}`}>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <ContainerRating>
                    <Rating average={movie.vote_average} />
                  </ContainerRating>

                  <MovieDescription>
                    <p>{movie.title}</p>
                    <span>
                      {genres &&
                        movie.genre_ids.length > 0 &&
                        movie.genre_ids.map((genreId, index) => {
                          const genre = genres.find(
                            (genre) => genre.id === genreId
                          );
                          return (
                            <React.Fragment key={genreId}>
                              {genre?.name}
                              {index < movie.genre_ids.length - 1 && ', '}
                            </React.Fragment>
                          );
                        })}
                    </span>
                  </MovieDescription>
                </Link>
              </li>
            ))}
          </ListMovies>
        )}
      </ContainerMovies>
      <Pagination pages={pages.totalPages} currentPage={pages.page} />
    </Section>
  );
}
