import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  Select {
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme.colors.mauve7};
    padding-left: 1rem;
    height: 3.5rem;
    padding-right: 3.25rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.mauve12};
    transition: ${(props) => props.theme.transition};

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 3rem;
    background: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238E4EC6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")
        calc(100% - 1rem) center / 24px no-repeat,
      ${(props) => props.theme.colors.mauve2};

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
  label {
    color: ${(props) => props.theme.colors.mauve12};
    font-size: 0.8rem;
    font-weight: 700;
    display: inline-block;
  }
`;
