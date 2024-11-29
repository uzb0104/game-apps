import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import NavBar from "./Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data (Login):", formData);
  };

  return (
    <Stack>
      {/* <NavBar /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          overflow: "hidden",
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" mb={2} color={"info"}>
          Kirish
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Parol"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
          >
            Kirish
          </Button>
        </form>
      </Box>
      {/* <Footer /> */}
    </Stack>
  );
};

export default Login;
