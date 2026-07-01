import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/Globalstyle.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </ThemeProvider>
);