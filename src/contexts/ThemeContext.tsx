import React, { createContext, useState } from "react";

export const ThemeContext: any = createContext<any>(null);

export const ThemeProvider = (props: any) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode') as string));

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
