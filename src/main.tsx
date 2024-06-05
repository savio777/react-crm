import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { ThemeCustomProvider } from "./hooks/useThemeCustom.tsx";
import HooksProvider from "./hooks/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeCustomProvider>
        <HooksProvider>
          <App />
        </HooksProvider>
      </ThemeCustomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
