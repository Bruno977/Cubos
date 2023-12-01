import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from '../../styles/global';
import { MoviesProps } from '../../types/movies';
import { BackgroundSection, ListMovies, Section } from './style';
import { Search } from '../../components/Search';
import Background from '../../assets/backgropund-krists-luhaers-unsplash.png';

// import teste from ""

export function Home() {
  const [movies, setMovies] = useState<MoviesProps['results'][] | null>(null);
  async function getMovies() {
    try {
      const response = await api.get('/movie/popular', {
        params: {
          language: 'pt-BR',
        },
      });
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
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
      </Container>
    </Section>
  );
}
