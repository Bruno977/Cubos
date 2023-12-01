import styled from 'styled-components';
import Logo from '../../assets/backgropund-krists-luhaers-unsplash.png';
import { rgba as ConvertRgba } from 'polished';

export const Section = styled.section`
  position: relative;
  z-index: 10;
  padding-top: 84px;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;

  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.mauveA3};

  backdrop-filter: blur(2px);

  li {
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;

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
    div {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      p {
        color: #eee;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`;
