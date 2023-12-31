import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { MovieType } from '../../types/movie';
import {
  ContainerMovie,
  ContainerMovieDescription,
  ContainerMovieSummary,
  ContainerRating,
  ContainerTitleSinopseAndGenres,
  MovieIncoming,
  MovieRatingDesktop,
  MovieRatingMobile,
  MovieRelease,
  MovieTrailer,
  SectionDetails,
} from './style';
import { BackgroundSection } from '../../components/BackgroundSection';
import { VideosType } from '../../types/videos';
import { Rating } from '../../components/Rating';
import { format, parseISO } from 'date-fns';
import { Loading } from '../../components/Loading';

export function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState(false);
  const [trailerMovie, setTrailerMovie] = useState<VideosType | null>(null);

  async function getMovieDetails() {
    setLoading(true);
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
      setMovie(response.data);
      setTrailerMovie(responseVideos.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SectionDetails>
      <BackgroundSection />
      <ContainerMovie>
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
                    <ContainerRating>
                      <Rating average={movie.vote_average} />
                    </ContainerRating>
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
                    <ContainerRating>
                      <Rating average={movie.vote_average} />
                    </ContainerRating>
                  </MovieRatingDesktop>
                  <MovieRelease>
                    <div>
                      <strong>Lançamento</strong>
                      <p>
                        {format(parseISO(movie.release_date), 'MM/dd/yyyy')}
                      </p>
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
                          notation: 'compact',
                          // maximumFractionDigits: 2,
                          compactDisplay: 'short',
                        }).format(movie.budget)}
                      </p>
                    </div>
                    <div>
                      <strong>Receita</strong>
                      <p>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'BRL',
                          notation: 'compact',
                          maximumFractionDigits: 2,
                          compactDisplay: 'short',
                        }).format(movie.revenue)}
                      </p>
                    </div>
                    <div>
                      <strong>Lucro</strong>
                      <p>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'BRL',
                          notation: 'compact',
                          maximumFractionDigits: 2,
                          compactDisplay: 'short',
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
    </SectionDetails>
  );
}
