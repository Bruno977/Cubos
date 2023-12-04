import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 350px;
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.mauveA3} 25%,
    ${(props) => props.theme.colors.mauveA4} 50%,
    ${(props) => props.theme.colors.mauveA3} 75%
  );
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s infinite;
`;
