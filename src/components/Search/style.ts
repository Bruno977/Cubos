import styled from 'styled-components';

export const ContainerSearch = styled.div`
  padding: 1.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

export const ContainerInput = styled.div`
  position: relative;
  max-width: 30.5rem;
  width: 100%;

  input {
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors.mauve7};
    background: ${(props) => props.theme.colors.mauve2};
    padding: 1rem;
    height: 3.5rem;
    padding-right: 3.25rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mauve12};
    transition: ${(props) => props.theme.transition};

    &:focus,
    &:focus-visible,
    &:hover {
      border-color: ${(props) => props.theme.colors.purple9};
      outline: none;
      caret-color: ${(props) => props.theme.colors.purple9};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.mauve9};
    }
  }
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background-color: transparent;
      transition: ${(props) => props.theme.transition};

      cursor: pointer;
      svg {
        &:hover {
          path {
            fill: ${(props) => props.theme.colors.purple10};
            stroke: ${(props) => props.theme.colors.purple10};
          }
        }
      }
    }
  }
`;

export const ContainerButtonFilter = styled.button`
  padding: 0.75rem 1.25rem;
  height: 3.5rem;
  border-radius: 0.125rem;
  backdrop-filter: blur(2px);
  transition: ${(props) => props.theme.transition};
  background-color: ${(props) => props.theme.colors.purpleA2};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.purple10};
    svg path,
    svg circle {
      stroke: #fff;
    }
  }
`;
