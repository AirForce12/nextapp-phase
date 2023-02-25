// Subhan Code
import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext(false);

const ThemeModeStateProvider = ({ children }) => {
    let getItem = localStorage.getItem("themeMode");
    if (getItem == null) {
        getItem = "dark";
    }
    const [theme, toggleTheme] = useState(getItem);
    useEffect(() => {
        localStorage.setItem("themeMode", theme);
        return () => {
            localStorage.removeItem("themeMode");
        };
    }, [theme]);

    return (
        <StateContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </StateContext.Provider>
    );
};

export default ThemeModeStateProvider;
