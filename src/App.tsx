import { CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useTheme } from "./theme";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";

const App: React.FC = () => {
  const { theme, colorMode } = useTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <main className="content">
            <Topbar />
            <Sidebar />
          </main>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
