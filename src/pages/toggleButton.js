/* // src/components/ThemeToggleButton.js
import React from 'react';
import { useTheme } from './themeContent';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggleButton; */
