import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from '../../styles/global';
import { MoviesProps } from '../../types/movies';
import {
  BackgroundSection,
  ContainerRating,
  MovieDescription,
  ListMovies,
  RatingProgress,
  RatingShadow,
  Section,
} from './style';
import { Search } from '../../components/Search';
import { Pagination } from '../../components/Pagination';
import { Link, useLocation } from 'react-router-dom';
import { GenresProps } from '../../types/genres';
import { Rating } from '../../components/Rating';
import { EllipseShadow } from '../../assets/icons/EllipseShadow';

export function Home() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get('page');

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
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getGenres();
  }, []);
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
                <Link to={'#'}>
                  <img
                    src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <ContainerRating>
                    <RatingProgress>
                      <Rating average={movie.vote_average} />
                    </RatingProgress>
                    <RatingShadow>
                      <EllipseShadow />
                    </RatingShadow>
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
        <Pagination pages={pages.totalPages} currentPage={pages.page} />
      </Container>
    </Section>
  );
}
