import styled, { css } from 'styled-components';

type HeaderContainerProps = {
  $scrolled: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.mauve6};
  backdrop-filter: blur(2px);
  transition: ${(props) => props.theme.transition};

  ${(props) =>
    props.$scrolled &&
    css`
      background-color: ${(props) => props.theme.colors.mauve1};
    `}

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme.colors.mauve12};
    font-size: 1.25rem;
    font-weight: 700;
    svg {
      width: 160px;
      height: 36px;
    }
  }
`;

export const ToggleTheme = styled.button`
  background-color: ${(props) => props.theme.colors.purpleA2};
  border-radius: 0.125rem;
  backdrop-filter: blur(2px);
  border: none;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;
