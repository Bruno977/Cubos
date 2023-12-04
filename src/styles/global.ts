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
    ${(props) => props.theme.transition}
  }
  input, button, label{
    font-family: 'Roboto', sans-serif;
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
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (min-width: 1536px) {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 1536px;
    margin: 0 auto;
  }
`;
