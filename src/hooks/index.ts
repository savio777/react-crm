import { useContext } from "react";

import { TranslationContext } from "./useTranslations";
import { ThemeCustomContext } from "./useThemeCustom";

export const useTranslation = () => useContext(TranslationContext);

export const useThemeCustom = () => useContext(ThemeCustomContext);
