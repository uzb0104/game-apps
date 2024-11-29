import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AdminNavbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AOGym Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
