import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { MovieType } from '../../types/movie';
import {
  ContainerMovie,
  ContainerMovieDescription,
  ContainerMovieSummary,
  ContainerTitleSinopseAndGenres,
  MovieIncoming,
  MovieRatingDesktop,
  MovieRatingMobile,
  MovieRelease,
  MovieTrailer,
} from './style';
import { BackgroundSection } from '../../components/BackgroundSection';
import { VideosType } from '../../types/videos';

export function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [trailerMovie, setTrailerMovie] = useState<VideosType | null>(null);

  async function getMovieDetails() {
    try {
      const response = await api.get(`/movie/${id}`, {
        params: {
          language: 'pt-BR',
        },
      });
      const responseVideos = await api.get(
        `/movie/${response.data.id}/videos`,
        {
          params: {
            language: 'pt-BR',
          },
        }
      );

      console.log(response.data);
      setMovie(response.data);
      setTrailerMovie(responseVideos.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <ContainerMovie>
      <BackgroundSection />
      {movie ? (
        <>
          <ContainerMovieSummary
            background={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          >
            <div>
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <ContainerMovieDescription>
              <ContainerTitleSinopseAndGenres>
                <h1>{movie.title}</h1>
                <p>{movie.original_title}</p>
                <p>{movie.tagline}</p>
                <MovieRatingMobile>
                  <div>
                    <strong>Popularidade</strong>
                    <p>{movie.popularity}</p>
                  </div>
                  <div>
                    <strong>Votos</strong>
                    <p>{movie.vote_count}</p>
                  </div>
                </MovieRatingMobile>
                <div>
                  <strong>Sinopse</strong>
                  <p>{movie.overview}</p>
                </div>
                <div>
                  <strong>Generos</strong>
                  <ul>
                    {movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </ContainerTitleSinopseAndGenres>

              <div>
                <MovieRatingDesktop>
                  <div>
                    <strong>Popularidade</strong>
                    <p>{movie.popularity}</p>
                  </div>
                  <div>
                    <strong>Votos</strong>
                    <p>{movie.vote_count}</p>
                  </div>
                </MovieRatingDesktop>
                <MovieRelease>
                  <div>
                    <strong>Lançamento</strong>
                    <p>{movie.release_date}</p>
                  </div>
                  <div>
                    <strong>Duração</strong>
                    <p>
                      {Math.floor(movie.runtime / 60)}
                      {'h'} {movie.runtime % 60}
                      {'m'}
                    </p>
                  </div>
                  <div>
                    <strong>Situação</strong>
                    <p>{movie.status}</p>
                  </div>
                  <div>
                    <strong>Idioma</strong>
                    <p>{movie.original_language}</p>
                  </div>
                </MovieRelease>
                <MovieIncoming>
                  <div>
                    <strong>Orçamento</strong>
                    <p>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(movie.budget)}
                    </p>
                  </div>
                  <div>
                    <strong>Receita</strong>
                    <p>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(movie.revenue)}
                    </p>
                  </div>
                  <div>
                    <strong>Lucro</strong>
                    <p>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(movie.revenue - movie.budget)}
                    </p>
                  </div>
                </MovieIncoming>
              </div>
            </ContainerMovieDescription>
          </ContainerMovieSummary>
          <MovieTrailer>
            <h2>Trailer</h2>

            {trailerMovie && trailerMovie.results.length > 0 && (
              <div>
                {trailerMovie.results
                  .filter((movie) => movie.type === 'Trailer')
                  .map((trailer) => (
                    <iframe
                      key={trailer.id}
                      title={movie?.title}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      allowFullScreen
                    ></iframe>
                  ))}
              </div>
            )}
          </MovieTrailer>
        </>
      ) : (
        <div>Não encontrado</div>
      )}
    </ContainerMovie>
  );
}
