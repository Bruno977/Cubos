import React from 'react';

import { RoutesComponent as Routes } from './routes';

import { ToggleThemeContextProvider } from './contexts/ToggleThemeContext';

export function App() {
  return (
    <ToggleThemeContextProvider>
      <Routes />
    </ToggleThemeContextProvider>
  );
}
