import { createContext, useState } from 'react';
import Child from './Child';

export const ThemeContext = createContext();

export default function Parent() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(t => t === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

