import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import NavBar from "./Navbar";
import Footer from "../Footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Foydalanuvchi ma'lumotlari:", formData);
  };

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 128px)", // Navbar (64px) + Footer (64px)
          overflow: "hidden",
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" mb={2}>
          Ro'yxatdan o'tish
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            fullWidth
            label="Ismingiz"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Familyangiz"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
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
            Ro'yxatdan o'tish
          </Button>
        </form>
      </Box>
      <Footer />
    </Stack>
  );
};

export default SignUp;
