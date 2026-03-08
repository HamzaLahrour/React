import { createContext, useState, useContext } from 'react';

// Creamos el contexto, es como una "caja" que comparte datos globalmente
export const ThemeContext = createContext();

// Este componente envuelve toda la app y provee el tema a todos los hijos
export function ThemeProviderCustom({ children }) {
  // false = claro, true = oscuro
  const [darkMode, setDarkMode] = useState(false); 
   // cambia entre claro y oscuro
  const toggleTheme = () => setDarkMode(prev => !prev); 

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente desde cualquier componente
export function useTheme() {
  return useContext(ThemeContext);
}