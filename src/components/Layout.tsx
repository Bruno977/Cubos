import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/themes/dark';
import { useToggleThemeContext } from '../contexts/ToggleThemeContext';
import { lightTheme } from '../styles/themes/light';
import { GlobalStyle } from '../styles/global';
import { Outlet } from 'react-router-dom';

export function Layout() {
  const { theme } = useToggleThemeContext();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
