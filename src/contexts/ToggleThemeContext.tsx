import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type ToggleThemeContextProps = {
  theme: 'dark' | 'light';
  handleToggleDarkMode: () => void;
};

export const ToggleThemeContext = createContext({} as ToggleThemeContextProps);

export function ToggleThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  function handleToggleDarkMode() {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }

  useEffect(() => {
    const storageValue = localStorage.getItem('theme');
    if (storageValue) {
      const value: 'dark' | 'light' = JSON.parse(storageValue);
      setTheme(value);
    }
  }, []);
  return (
    <ToggleThemeContext.Provider value={{ theme, handleToggleDarkMode }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export function useToggleThemeContext() {
  const context = useContext(ToggleThemeContext);
  return context;
}
