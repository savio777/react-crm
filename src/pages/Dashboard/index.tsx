import { Box } from "@mui/material";

import HeaderPage from "../../components/atom/HeaderPage";
import { useTranslation } from "../../hooks";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <HeaderPage
          title={t("Dashboard.title")}
          subtitle={t("Dashboard.subtitle")}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
