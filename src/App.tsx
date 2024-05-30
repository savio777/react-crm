import { CssBaseline, ThemeProvider } from "@mui/material";

import { useThemeCustom } from "./theme";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";

const App: React.FC = () => {
  const { theme } = useThemeCustom();

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <main className="content">
          <Topbar />
          <Sidebar />
        </main>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
