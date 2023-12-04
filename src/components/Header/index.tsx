import { useContext, useEffect, useState } from 'react';
import { HeaderContainer, ToggleTheme } from './style';
import { Link } from 'react-router-dom';
import { IconSun } from '../../assets/icons/IconSun';
import { LogoCubos } from '../../assets/icons/LogoCubos';
import { useToggleThemeContext } from '../../contexts/ToggleThemeContext';
import { DefaultTheme, ThemeContext } from 'styled-components';

export function Header() {
  const { handleToggleDarkMode } = useToggleThemeContext();
  const { colors } = useContext(ThemeContext) as DefaultTheme;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 84;

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <Link to="/">
        <LogoCubos color={colors.mauve12} />
        <p>Movies</p>
      </Link>
      <ToggleTheme type="button" onClick={handleToggleDarkMode}>
        <IconSun primary={colors.purpleA12} secondary={colors.mauve12} />
      </ToggleTheme>
    </HeaderContainer>
  );
}
