import { useCallback } from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { Formik } from "formik";

import { useThemeCustom, useTranslation } from "@/hooks";
import Input from "@/components/atom/Input";
import { useAuth } from "@/store/useAuth";
import { authSchema, IAuthSchema } from "./schema";

const Login: React.FC = () => {
  const { theme, toggleThemeCustom } = useThemeCustom();
  const { t, changeLocale, locale } = useTranslation();
  const { editUser } = useAuth();

  const handleSubmitLogin = useCallback(
    (values: IAuthSchema) => {
      editUser({
        email: values.email,
        avatar_url: "https://avatars.githubusercontent.com/u/35678887?v=4",
        id: "0648f7a5-a5b7-4191-822f-d051a887f21d",
        name: "Sávio Dev",
        occupation: "Admin Test",
        isActive: true,
      });
    },
    [editUser]
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        background:
          "url('https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        bgcolor={theme.palette.background.paper}
        padding={6}
        borderRadius={3}
        gap={2}
      >
        <Typography variant="h2">{t("common.login")}</Typography>

        <Formik
          validationSchema={authSchema}
          initialValues={{ email: "", password: "" } as IAuthSchema}
          onSubmit={handleSubmitLogin}
        >
          {({ values, handleChange, errors, handleSubmit }) => (
            <>
              <Input
                type="email"
                placeholder={t("common.email")}
                value={values.email}
                onChange={handleChange("email")}
                errorSchema={errors?.email}
              />

              <Input
                type="password"
                placeholder={t("common.password")}
                value={values.password}
                onChange={handleChange("password")}
                errorSchema={errors?.password}
              />

              <Button variant="contained" onClick={handleSubmit}>
                {t("common.send")}
              </Button>
            </>
          )}
        </Formik>
      </Box>

      <Box display="flex" position="absolute" top="50px" right="200px">
        <IconButton type="button" onClick={toggleThemeCustom}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton type="button" onClick={changeLocale}>
          <TranslateOutlinedIcon />
          <Typography>{locale === "en" ? "pt-br" : "en"}</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Login;
