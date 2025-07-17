import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import LoginPage from "./LoginPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoginPage />
        </ThemeProvider>
    );
}

export default App;

