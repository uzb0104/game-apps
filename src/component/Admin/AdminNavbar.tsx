import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/AdminNavbar");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#1a2129a6" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer" }}
          onClick={handleNavigate}
        >
          AOGym Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
