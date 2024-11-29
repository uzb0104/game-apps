import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./Navbar";
import Footer from "../Footer/Footer";

const LogReg = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          bgcolor: "#f5f5f5",
        }}
      >
        {isLogin ? <Login /> : <SignUp />}

        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Button
            variant="outlined"
            onClick={() => setIsLogin(!isLogin)}
            sx={{ mt: 2 }}
          >
            {isLogin ? "Yangi hisob yaratish" : "Login parol orqali o'tish"}
          </Button>
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default LogReg;
