import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

import { themeSettings } from "./config";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useTheme = () => {
  const [mode, setMode] = useState<IThemeMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};
