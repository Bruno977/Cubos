import React, { FormEvent, useEffect, useState } from 'react';
import { Container, ContainerButtons, Form } from './style';
import { Select } from '../Select';
import { GenresProps } from '../../types/genres';
import { api } from '../../services/api';
import { Input } from '../Input';
import { Button } from '../Button';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

type FiltersProps = {
  filterIsActive: boolean;
  handleCloseFilters: () => void;
};

export function Filters({ filterIsActive, handleCloseFilters }: FiltersProps) {
  const [genres, setGenres] = useState<GenresProps[] | null>(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  async function handleFilterMovies(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      with_genres: data.get('with_genres') || null,
      sort_by: data.get('sort_by') || null,
      year: data.get('year') || null,
    };
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== null)
    );

    const query = qs.stringify(filteredValues, { addQueryPrefix: false });

    navigate({
      pathname: '/',
      search: query,
    });
  }

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

  function handleClearFilters() {
    handleCloseFilters();
    navigate('/');
  }

  useEffect(() => {
    if (filterIsActive) {
      getGenres();
    }
  }, [filterIsActive]);

  return (
    <Container>
      <Form onSubmit={handleFilterMovies}>
        <div>
          <Select
            id="with_genres"
            label="Gêneros"
            name="with_genres"
            options={
              genres && genres.length > 0
                ? genres.map((genre) => {
                    return {
                      value: genre.id,
                      label: genre.name,
                    };
                  })
                : []
            }
          />
          <Input
            type="number"
            name="year"
            id="year"
            placeholder="Ano"
            label="Ano"
          />
          <Select
            id="sort_by"
            label="Ordenar por"
            name="sort_by"
            options={[
              {
                value: 'popularity.asc',
                label: 'Popularidade A-Z',
              },
              {
                value: 'popularity.desc',
                label: 'Popularidade Z-A',
              },
              {
                value: 'revenue.asc',
                label: 'Receita A-Z',
              },
              {
                value: 'revenue.desc',
                label: 'Receita Z-A',
              },
              {
                value: 'primary_release_date.asc',
                label: 'Data de lançamento A-Z',
              },
              {
                value: 'primary_release_date.desc',
                label: 'Data de lançamento Z-A',
              },
              {
                value: 'vote_average.asc',
                label: 'Média de Votos A-Z',
              },
              {
                value: 'vote_average.desc',
                label: 'Média de Votos Z-A',
              },
              {
                value: 'vote_count.asc',
                label: 'Contagem de Votos A-Z',
              },
              {
                value: 'vote_count.desc',
                label: 'Contagem de Votos Z-A',
              },
            ]}
          />
        </div>
        <ContainerButtons>
          {search && (
            <Button
              type="button"
              variant="secondary"
              onClick={handleClearFilters}
            >
              Limpar Filtros
            </Button>
          )}

          <Button type="submit">Filtrar</Button>
        </ContainerButtons>
      </Form>
    </Container>
  );
}
