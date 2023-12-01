import { purple, purpleA, mauve, mauveA } from '@radix-ui/colors';
import { variables } from '../variables';

export const lightTheme = {
  colors: {
    ...purple,
    ...purpleA,
    ...mauve,
    ...mauveA,
    white: '#ffffff',
  },
  ...variables,
};
