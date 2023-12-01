import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.mauve6};
  backdrop-filter: blur(2px);

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
