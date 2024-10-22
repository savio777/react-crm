import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import HeaderPage from "@/components/atom/HeaderPage";
import { useTranslation } from "@/hooks";
import { colorTokens } from "@/theme";
import { mockDataTeam } from "@/data/mockData";

const Team: React.FC = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const { t } = useTranslation();

  const columns: GridColDef[] = [
    { field: "id", headerName: t("common.id") },
    {
      field: "name",
      headerName: t("common.name"),
      cellClassName: "name-column--cell",
      flex: 1,
    },
    { field: "email", headerName: t("common.email"), flex: 1 },
    { field: "phone", headerName: t("common.phone"), flex: 1 },
    {
      field: "access",
      headerName: t("common.access"),
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="10px auto"
          p="5px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="4px"
          gap="5px"
          sx={{
            backgroundColor:
              access === "admin" ? colors.green[600] : colors.green[700],
          }}
        >
          {access === "admin" ? <AdminPanelSettingsIcon /> : null}
          {access === "manager" ? <SecurityOutlinedIcon /> : null}
          {access === "user" ? <LockOpenIcon /> : null}
          <Typography textTransform="capitalize">{access}</Typography>
        </Box>
      ),
    },
    {
      field: "age",
      headerName: t("common.age"),
      align: "left",
      headerAlign: "left",
      type: "number",
    },
  ];

  return (
    <Box m="20px">
      <HeaderPage title={t("Team.title")} subtitle={t("Team.subtitle")} />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blue[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blue[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blue[700],
          },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.green[300] },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
