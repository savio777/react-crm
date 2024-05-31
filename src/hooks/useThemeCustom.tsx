import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { createTheme, Theme } from "@mui/material";

import { themeSettings } from "../theme/config";

interface Props {
  children: ReactNode;
}

interface IThemeCustom {
  toggleThemeCustom: () => void;
  theme: Theme;
}

export const ThemeCustomContext = createContext<IThemeCustom>(
  {} as IThemeCustom
);

export const ThemeCustomProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<IThemeMode>("dark");

  const toggleThemeCustom = useCallback(
    () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeCustomContext.Provider value={{ theme, toggleThemeCustom }}>
      {children}
    </ThemeCustomContext.Provider>
  );
};
