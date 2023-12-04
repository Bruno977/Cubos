import { PropsWithChildren } from 'react';
import { Container } from './style';

export function SearchMovieResult({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
