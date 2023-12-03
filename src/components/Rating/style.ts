import styled from 'styled-components';

export const ContainerRating = styled.div`
  position: relative;
  width: 6.125rem;
  height: 6.125rem;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    height: 9rem;
    width: 9rem;
  }
`;
export const RatingProgress = styled.div`
  position: absolute;
  inset: 0;
  z-index: 20;
  border-radius: 99999px;
  backdrop-filter: blur(2px);
  transition: opacity 0.2s ease-in-out 0s;
`;

export const RatingShadow = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 10;

  transition: opacity 0.2s ease-in-out 0s;
  svg {
    width: 6.125rem;
    height: 6.125rem;
    margin: 0 auto;

    @media screen and (min-width: 1024px) {
      height: 9rem;
      width: 9rem;
    }
  }
`;

export const ProgressCircular = styled.div`
  .CircularProgressbar .CircularProgressbar-trail {
    stroke: rgba(255, 255, 255, 0.27);
  }
  .CircularProgressbar .CircularProgressbar-path {
    stroke: #ffe000;
    stroke-linecap: butt;
  }
`;

export const ProgressText = styled.div`
  strong {
    color: #ffe000;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;

    span {
      color: #fff;
      font-size: 0.875rem;

      position: relative;
      top: -1px;
    }
  }
`;
