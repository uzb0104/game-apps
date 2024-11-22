import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Button, Menu, MenuItem } from "@mui/material";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

import NavLink from "../NavLink/Navlink";

const NavBar = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="h4"
        sx={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <SportsMartialArtsIcon fontSize="large" />
        <span style={{ fontWeight: "bold" }}>AOGym</span>
      </Typography>

      <NavLink />

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "white",
            borderRadius: 2,
            backgroundColor: "#ff6f61",
            borderColor: "#cdc2c1",
            "&:hover": { color: "white" },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
            borderRadius: 2,
            backgroundColor: "#ff6f61",
            borderColor: "#cdc2c1",
            "&:hover": { color: "white" },
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default NavBar;
