import styled, { css } from 'styled-components';
import { rgba as ConvertRgba } from 'polished';
import { RatingShadow } from '../../components/Rating/style';

export const ContainerMovie = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 116px;
  position: relative;
  z-index: 10;
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

export const ContainerMovieSummary = styled.div<{ background: string }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  img {
    border-radius: 4px;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    position: relative;
    z-index: 9;

    &:after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.mauve1},
        0%,
        ${(props) => ConvertRgba(props.theme.colors.mauve1, 0.8)} 50%,
        ${(props) => ConvertRgba(props.theme.colors.mauve1, 0)} 100%
      );
    }
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: url(${(props) => props.background});
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.5;
      background-position: bottom;
    }
  }
`;

const card = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem;

  border-radius: 0.25rem;
  background: ${(props) => ConvertRgba(props.theme.colors.mauve3, 0.6)};
  backdrop-filter: blur(2px);
`;

export const ContainerTitleSinopseAndGenres = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.mauve12};
  }
  > p:first-of-type {
    color: ${(props) => props.theme.colors.mauve11};
    font-size: 1rem;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
      padding-bottom: 1.2rem;
    }
  }
  > p:last-of-type {
    color: ${(props) => props.theme.colors.mauve12};
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    padding-bottom: 1rem;
  }
  > div:nth-of-type(2) {
    ${card};
    margin-bottom: 1rem;

    strong {
      color: ${(props) => props.theme.colors.mauve11};
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      color: ${(props) => props.theme.colors.mauve12};
      font-size: 1rem;
      font-weight: 400;
    }
  }
  > div:nth-of-type(3) {
    ${card};
    strong {
      color: ${(props) => props.theme.colors.mauve11};
      font-size: 0.875rem;
      font-weight: 700;
    }
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;

      li {
        padding: 0.5rem;
        border-radius: 0.125rem;
        background: ${(props) => props.theme.colors.purpleA3};
        backdrop-filter: blur(2px);
        color: ${(props) => props.theme.colors.purple12};
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`;

export const ContainerRating = styled.div`
  > div {
    width: 6.125rem;
    height: 6.125rem;
    ${RatingShadow} {
      svg {
        width: 6.125rem;
        height: 6.125rem;
      }
    }
  }
`;

export const ContainerMovieDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardRating = css`
  ${card}
  strong {
    color: ${(props) => props.theme.colors.mauve11};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const MovieRatingDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    > div:not(:last-of-type) {
      ${CardRating}
    }
  }
`;
export const MovieRatingMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  > div:not(:last-of-type) {
    ${CardRating}
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const MovieRelease = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    ${CardRating}
    width: calc(50% - .5rem);
  }
  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
  }
`;

export const MovieIncoming = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  div {
    ${CardRating}
    flex: 1;
  }
`;

export const MovieTrailer = styled.div`
  margin-bottom: 2rem;
  h2 {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  div {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
