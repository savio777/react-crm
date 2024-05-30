import {
  createContext,
  useMemo,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { createTheme, Theme } from "@mui/material";

import { themeSettings } from "./config";

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

export const useThemeCustom = () => useContext(ThemeCustomContext);

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
