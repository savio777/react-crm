import { Box } from "@mui/material";

import HeaderPage from "../../components/atom/HeaderPage";

const Dashboard: React.FC = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <HeaderPage title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
