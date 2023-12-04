import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 1.5rem;
`;

export const ContainerCheckbox = styled.div`
  p {
    color: ${(props) => props.theme.colors.mauve12};
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      label {
        color: ${(props) => props.theme.colors.mauve12};
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;

export const Form = styled.form`
  > div:first-of-type {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* flex-wrap: wrap; */

    @media screen and (min-width: 1024px) {
      gap: 1rem;
      flex-direction: row;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
