import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  label {
    color: ${(props) => props.theme.colors.mauve12};
    font-size: 0.8rem;
    font-weight: 700;
    display: inline-block;
  }
  input[type='text'],
  input[type='number'] {
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors.mauve7};
    background: ${(props) => props.theme.colors.mauve2};
    padding: 1rem;
    height: 3.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mauve12};
    transition: ${(props) => props.theme.transition};

    &:focus:not(:disabled),
    &:focus-visible:not(:disabled),
    &:hover:not(:disabled) {
      border-color: ${(props) => props.theme.colors.purple9};
      outline: none;
      caret-color: ${(props) => props.theme.colors.purple9};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.mauve9};
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
