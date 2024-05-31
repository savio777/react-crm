import { Box, IconButton, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

import { colorTokens } from "@/theme";
import { useThemeCustom, useTranslation } from "@/hooks";

const Topbar: React.FC = () => {
  const { theme, toggleThemeCustom } = useThemeCustom();

  const { changeLocale, locale } = useTranslation();

  const colors = colorTokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton type="button" onClick={toggleThemeCustom}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>

        <IconButton type="button" onClick={changeLocale}>
          <TranslateOutlinedIcon />
          <Typography>{locale === "en" ? "pt-br" : "en"}</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
