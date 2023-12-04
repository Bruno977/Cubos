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
import { Filters } from '../../components/Filters';
import qs from 'qs';
import { SkeletonSpot } from '../../components/Skeleton/Spot';
import { SearchMovieResult } from '../../components/SearchMovieResult';

export function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const queryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const [movies, setMovies] = useState<MoviesProps['results'][] | null>(null);

  const [pages, setPages] = useState({
    page: 1,
    totalPages: 1,
  });

  const [genres, setGenres] = useState<GenresProps[] | null>(null);

  async function getGenres() {
    setLoading(true);
    try {
      const response = await api.get('/genre/movie/list', {
        params: {
          language: 'pt-BR',
        },
      });
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getMovies() {
    setLoading(true);
    try {
      const response = await api.get(`/discover/movie`, {
        params: {
          ...queryParams,
          language: 'pt-BR',
        },
      });
      setMovies(response.data.results);
      setPages({
        page: response.data.page,
        totalPages: response.data.total_pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchMovie(value: string, page: number) {
    setLoading(true);
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (queryParams.search) {
      handleSearchMovie(String(queryParams.search), Number(queryParams.page));
    }
    if (!queryParams.search) {
      getMovies();
    }
  }, [search]);

  return (
    <Section>
      <BackgroundSection />
      <Container>
        <Search
          filterIsActive={showFilters}
          handleShowFilters={() => setShowFilters(!showFilters)}
        />
        {showFilters && (
          <Filters
            filterIsActive={showFilters}
            handleCloseFilters={() => setShowFilters(false)}
          />
        )}
      </Container>
      <ContainerMovies>
        {loading && (
          <ListMovies $skeleton={true}>
            {Array.from({ length: 20 }).map((_, index) => (
              <li key={index}>
                <SkeletonSpot />
              </li>
            ))}
          </ListMovies>
        )}
        {!loading && movies && movies.length > 0 && (
          <ListMovies>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/detalhes/${movie.id}`}>
                  {movie.poster_path ? (
                    <img
                      src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
                      alt={movie.original_title}
                    />
                  ) : (
                    <SkeletonSpot />
                  )}

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
        {!loading && (!movies || movies.length === 0) && (
          <SearchMovieResult>Nenhum Filme encontrado</SearchMovieResult>
        )}
      </ContainerMovies>
      {movies && movies.length !== 0 && (
        <Pagination pages={pages.totalPages} currentPage={pages.page} />
      )}
    </Section>
  );
}
