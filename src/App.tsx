import { CssBaseline } from "@mui/material";

import Routes from "./routes";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import { useAuth } from "./store/useAuth";
import Login from "./pages/auth/Login";

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="app">
      {user?.isActive ? (
        <>
          <Sidebar />

          <main className="content">
            <Topbar />
            <Routes />
          </main>
        </>
      ) : (
        <main className="content">
          <Login />
        </main>
      )}
      <CssBaseline />
    </div>
  );
};

export default App;
