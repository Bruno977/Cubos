import { ComponentProps } from 'react';
import { Container } from './style';

type InputProps = ComponentProps<'select'> & {
  label: string;
  id: string;
  options: {
    value: string | number;
    label: string;
  }[];
};

export function Select({ label, id, options, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest} defaultValue="default">
        <option value="default" disabled>
          Selecione uma opção
        </option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </Container>
  );
}
