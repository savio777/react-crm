import { CssBaseline, ThemeProvider } from "@mui/material";

import Routes from "./routes";
import { useThemeCustom } from "./hooks";
import { TranslationProvider } from "./hooks/useTranslations";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";

const App: React.FC = () => {
  const { theme } = useThemeCustom();

  return (
    <ThemeProvider theme={theme}>
      <TranslationProvider>
        <div className="app">
          <Sidebar />

          <main className="content">
            <Topbar />
            <Routes />
          </main>
        </div>
        <CssBaseline />
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default App;
