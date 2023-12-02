import styled from 'styled-components';
import Logo from '../../assets/backgropund-krists-luhaers-unsplash.png';
import { rgba as ConvertRgba } from 'polished';

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
`;

export const BackgroundSection = styled.div`
  position: absolute;
  height: 35.25rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  div {
    position: relative;
    height: 35.25rem;
    overflow: hidden;
    &:before {
      content: '';
      display: block;
      background: url(${Logo}), lightgray 0px 0px / 100% 111.628% no-repeat;
      opacity: 0.4;
      background-size: cover;
      width: 100%;
      height: 53.75rem;
      background-position: 50% -185px;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        180deg,
        ${(props) => props.theme.colors.mauve1} 0%,
        ${(props) => ConvertRgba(props.theme.colors.mauve1, 0.46)} 49.48%,
        ${(props) => props.theme.colors.mauve1} 100%
      );
    }
  }
`;
export const ListMovies = styled.ul`
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
`;
export const RatingProgress = styled.div`
  position: absolute;
  inset: 0;
  z-index: 20;

  max-width: 144px;
  max-height: 144px;
  margin: 0 auto;
  border-radius: 99999px;
  backdrop-filter: blur(2px);

  transition: opacity 0.2s ease-in-out 0s;
  opacity: 0;
  ${ListMovies} li:hover & {
    opacity: 1;
  }
`;

export const RatingShadow = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  left: 5px;
  bottom: 2px;
  z-index: 10;
  max-width: 144px;
  max-height: 144px;
  margin: 0 auto;

  transition: opacity 0.2s ease-in-out 0s;
  opacity: 0;

  ${ListMovies} li:hover & {
    opacity: 1;
  }
`;
