import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999999;
  pointer-events: none;
  background: ${(props) => props.theme.colors.mauveA10};

  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${spinAnimation} 1s linear infinite;
    width: 48px;
    height: 48px;
  }
  svg path {
    stroke: ${(props) => props.theme.colors.mauve12};
  }
`;
