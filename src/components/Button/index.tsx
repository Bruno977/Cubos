import React, { ComponentProps } from 'react';
import { ButtonItem } from './style';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <ButtonItem $variant={variant} {...rest}>
      {children}
    </ButtonItem>
  );
}
