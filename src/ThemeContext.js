import {
  createContext,
  useContext,
  useState
} from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }) {
  const [darktheme, setDarkTheme] = useState(true);

  function handleToggle() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={darktheme}>
      <ThemeUpdateContext.Provider
        value={handleToggle}
      >
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
