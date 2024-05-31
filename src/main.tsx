import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { ThemeCustomProvider } from "./hooks/useThemeCustom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeCustomProvider>
        <App />
      </ThemeCustomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
