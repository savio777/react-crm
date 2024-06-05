import { ReactNode, useContext } from "react";

import { ThemeProvider } from "@mui/material";

import { TranslationContext, TranslationProvider } from "./useTranslations";
import { ThemeCustomContext } from "./useThemeCustom";

export const useTranslation = () => useContext(TranslationContext);

export const useThemeCustom = () => useContext(ThemeCustomContext);

interface Props {
  children: ReactNode;
}

const HooksProvider: React.FC<Props> = ({ children }) => {
  const { theme } = useThemeCustom();

  return (
    <ThemeProvider theme={theme}>
      <TranslationProvider>{children}</TranslationProvider>
    </ThemeProvider>
  );
};

export default HooksProvider;
