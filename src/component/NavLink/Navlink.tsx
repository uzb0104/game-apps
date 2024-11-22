import React from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavLink = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={4}>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          "&:hover": { color: "#ff6f61" },
        }}
        onClick={() => navigate("/")}
      >
        Asosiy
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          "&:hover": { color: "#ff6f61" },
        }}
        onClick={() => navigate("/program")}
      >
        Program
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          "&:hover": { color: "#ff6f61" },
        }}
        onClick={() => navigate("/sporthaqida")}
      >
        Sport Haqida
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
          "&:hover": { color: "#ff6f61" },
        }}
        onClick={() => navigate("/Fitnes")}
      >
        Fitnes
      </Typography>
    </Stack>
  );
};

export default NavLink;
