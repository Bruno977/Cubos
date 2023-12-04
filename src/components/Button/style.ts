import styled, { css } from 'styled-components';
type ButtonProps = {
  $variant: 'primary' | 'secondary';
};

export const ButtonItem = styled.button<ButtonProps>`
  border-radius: 0.25rem;
  border: 1px solid transparent;
  padding: 0rem 2rem;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 400;

  transition: ${(props) => props.theme.transition};
  cursor: pointer;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      border-color: ${(props) => props.theme.colors.purple9};
      background: ${(props) => props.theme.colors.purple9};
      color: ${(props) => props.theme.colors.white};

      &:hover:not(:disabled) {
        border-color: ${(props) => props.theme.colors.purple10};
        background: ${(props) => props.theme.colors.purple10};
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      border-color: ${(props) => props.theme.colors.purpleA2};
      background: ${(props) => props.theme.colors.purpleA2};
      color: ${(props) => props.theme.colors.purpleA12};
      backdrop-filter: blur(2px);
      &:hover:not(:disabled) {
        border-color: ${(props) => props.theme.colors.purpleA3};
        background: ${(props) => props.theme.colors.purpleA3};
      }
    `}
`;
