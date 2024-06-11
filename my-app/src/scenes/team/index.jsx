import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [

    { field: "id", headerName: "ID" },
    { field: "name", headrName: "Name" },
    { field: "age", headrName: "Age" },
    { field: "phone", headrName: "Phone Number" },
    { field: "email", headrName: "eEmail" },
    { field: "access", headrName: "Access Level" },


  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}

export default Team
