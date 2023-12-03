import { FormEvent, useContext, useEffect, useState } from 'react';
import { ContainerButtonFilter, ContainerInput, FormSearch } from './style';
import { IconSearch } from '../../assets/icons/IconSearch';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { IconFilter } from '../../assets/icons/IconFilter';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

export function Search() {
  const { colors } = useContext(ThemeContext) as DefaultTheme;
  const [disabledInput, setDisabledInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchParams = queryParams.get('search');

  function handleSearchMovie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = {
      name: data.get('name'),
    };
    if (value.name) {
      navigate({
        pathname: '/',
        search: createSearchParams({
          search: String(value.name),
        }).toString(),
      });
    }
  }

  async function handleChangeSearch(value: string) {
    setInputValue(value);
    try {
      if (value.length <= 0) {
        setDisabledInput(true);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDisabledInput(false);
    }
  }

  useEffect(() => {
    if (searchParams) {
      setInputValue(searchParams);
    }
  }, [searchParams]);

  return (
    <FormSearch onSubmit={handleSearchMovie}>
      <ContainerInput>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue}
          disabled={disabledInput}
          placeholder="Pesquise por filmes"
          onChange={({ target }) => handleChangeSearch(target.value)}
        />
        <div>
          <button type="submit" disabled={disabledInput}>
            <IconSearch color={colors.mauve11} />
          </button>
        </div>
      </ContainerInput>
      <ContainerButtonFilter>
        <IconFilter color={colors.mauve12} />
      </ContainerButtonFilter>
    </FormSearch>
  );
}
