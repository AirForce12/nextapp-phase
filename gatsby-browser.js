// Subhan Code
import React from "react";
import ThemeModeStateProvider from "./src/context-api/toggle-switch-context/theme-mode-state";

export const wrapRootElement = ({ element }) => (
    <ThemeModeStateProvider>{element}</ThemeModeStateProvider>
);
