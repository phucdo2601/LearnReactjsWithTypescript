import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const ThemeButton = () => {
  const { darkMode, setDarkMode } : any = useContext<any>(ThemeContext);

  const handleTheme = (e: any) => {
    const darkModeSet: any = !darkMode;
    setDarkMode(darkModeSet);
    localStorage.setItem('darkMode', darkModeSet);
  };

  return (
    <>
      <button
        className={
            darkMode
              ? "btn btn-floating fa fa-toggle-on"
              : "btn btn-floating fa fa-toggle-off"
          }
        onClick={handleTheme}
      ></button>
    </>
  );
};

export default ThemeButton;
