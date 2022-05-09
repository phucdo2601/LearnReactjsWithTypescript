import { PropTypes } from "@material-ui/core";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextDefault {
    theme : PropTypes.Color;
    toggleTheme: (theme: PropTypes.Color) => void;

}

const themeContextDefaultData = {
    theme: "primary" as  PropTypes.Color,
    toggleTheme: () => {}
}



export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData);

const ThemeContextProvider = ({children} : ThemeContextProps) => {
    /**
     * Bien state theme
     * Su dung state de thay doi va luu gia tri cua theme khi giao dien nhan thay doi
     */
    const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme);

    /**
     * ham set su thay doi cua theme
     */
    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

    const themeContextDynamicData = {theme, toggleTheme};


    return <ThemeContext.Provider value={themeContextDynamicData}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider