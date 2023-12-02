import styled from 'styled-components';

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
