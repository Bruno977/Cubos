import { useContext } from 'react';
import {
  ContainerButtonFilter,
  ContainerInput,
  ContainerSearch,
} from './style';
import { IconSearch } from '../../assets/icons/IconSearch';
import { ThemeContext } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { IconFilter } from '../../assets/icons/IconFilter';

export function Search() {
  const { colors } = useContext(ThemeContext) as DefaultTheme;
  return (
    <ContainerSearch>
      <ContainerInput>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Pesquise por filmes"
        />
        <div>
          <button type="button">
            <IconSearch color={colors.mauve11} />
          </button>
        </div>
      </ContainerInput>
      <ContainerButtonFilter>
        <IconFilter color={colors.mauve12} />
      </ContainerButtonFilter>
    </ContainerSearch>
  );
}
