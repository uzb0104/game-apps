import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";

import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 64px - 128px)",
          overflow: "hidden",
        }}
      >
        <Routes>
          {ROUTES.map((item, index) => (
            <Route key={index} {...item} />
          ))}
        </Routes>
      </Box>
    </>
  );
};

export default App;
