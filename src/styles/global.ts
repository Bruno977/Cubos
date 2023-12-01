import { mauve } from '@radix-ui/colors';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.colors.mauve1};
  }
  a{
    text-decoration: none;
  }
  ol, ul { list-style: none; }

`;

export const Container = styled.div``;
