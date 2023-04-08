import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme-dark');
  const [isLightMode, setisLightMode] = useState(true);

  const toggleLightMode = () => {
    setisLightMode(!isLightMode);
    toggleTheme()
  };
  const toggleTheme = () => {
    setTheme(() => (isLightMode ? '' : 'theme-dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, isLightMode, toggleTheme, toggleLightMode }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
