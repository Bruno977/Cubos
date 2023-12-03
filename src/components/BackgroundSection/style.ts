import styled from 'styled-components';
import Logo from '../../assets/backgropund-krists-luhaers-unsplash.png';
import { rgba as ConvertRgba } from 'polished';

export const Background = styled.div`
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
