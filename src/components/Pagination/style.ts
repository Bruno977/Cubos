import styled from 'styled-components';
import { Link } from 'react-router-dom';

type LinkProps = {
  disabled: boolean;
};

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
`;

const ArrowPagination = styled(Link)<LinkProps>`
  border-radius: 0.125rem;
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.mauveA3 : props.theme.colors.purple9};
  min-height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.disabled ? props.theme.colors.mauveA9 : props.theme.colors.white};

  pointer-events: ${(props) => (props.disabled ? 'none' : 'initial')};
  transition: ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) => props.theme.colors.purple10};
  }
  @media screen and (min-width: 1024px) {
    padding: 0.75rem 1.25rem;
  }
`;

export const PrevButtonPagination = styled(ArrowPagination)`
  transform: rotate(180deg);
  @media screen and (min-width: 1024px) {
    width: 4rem;
  }
`;
export const NextButtonPagination = styled(ArrowPagination)`
  @media screen and (min-width: 1024px) {
    width: 4rem;
  }
`;

export const Pages = styled(ArrowPagination)`
  span {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;
