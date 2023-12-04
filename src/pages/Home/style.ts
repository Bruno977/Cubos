import styled, { css } from 'styled-components';
import { RatingProgress, RatingShadow } from '../../components/Rating/style';

export const Section = styled.section`
  position: relative;
  z-index: 10;
  padding-top: 84px;
`;

export const ContainerMovies = styled.div`
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

export const ListMovies = styled.ul<{ $skeleton?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;

  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.mauveA3};

  backdrop-filter: blur(2px);

  li {
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    ${(props) =>
      props.$skeleton &&
      css`
        min-height: 350px;
        @media screen and (min-width: 1024px) {
          min-height: 350px;
        }
      `}

    a {
      display: block;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(#00000000, #00000080, #000000);
    }
    img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

export const MovieDescription = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: #eee;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  span {
    color: #b4b4b4;
    font-size: 0.8rem;
    font-weight: 400;
    transform: translateY(100px);
    transition: ${(props) => props.theme.transition};
    opacity: 0;

    ${ListMovies} li:hover & {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const ContainerRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 4.56rem;
  ${RatingProgress} {
    opacity: 0;
    ${ListMovies} li:hover & {
      opacity: 1;
    }
  }
  ${RatingShadow} {
    opacity: 0;

    ${ListMovies} li:hover & {
      opacity: 1;
    }
  }
`;
