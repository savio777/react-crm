import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "@/theme";

interface Props {
  title: string;
  subtitle: string;
}

const HeaderPage: React.FC<Props> = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        id="title-page"
        variant="h2"
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ m: "0 0 5px 0" }}
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography id="subtitle-page" variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderPage;
