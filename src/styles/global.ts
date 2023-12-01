import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html,
  body {
    background-color: ${(props) => props.theme.colors.mauve1};
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  ol, ul {
     list-style: none; 
  }

  img {
    max-width: 100%;
}
`;

export const Container = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;
