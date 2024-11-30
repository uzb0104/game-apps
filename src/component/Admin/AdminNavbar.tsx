import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AdminNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1a2129a6" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AOGym Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
