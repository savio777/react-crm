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
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderPage;
