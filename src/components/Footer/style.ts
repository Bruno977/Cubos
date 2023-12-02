import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.mauveA6};
  padding: 1.25rem;
  p {
    color: ${(props) => props.theme.colors.mauve11};
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    strong {
      font-weight: 600;
    }
  }
`;
