import { createContext, useState, useContext } from "react";
var ThemeContext = createContext();
export var ThemeProvider = ({ children }) => {
  var [theme, setTheme] = useState("light");
  var toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
