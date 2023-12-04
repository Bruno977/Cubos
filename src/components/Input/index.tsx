import React, { ComponentProps } from 'react';
import { Container } from './style';

type InputProps = ComponentProps<'input'> & {
  label: string;
  id: string;
};

export function Input({ label, id, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </Container>
  );
}
