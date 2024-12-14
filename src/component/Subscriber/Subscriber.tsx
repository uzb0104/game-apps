import React from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import BgsportImg from "../img/ffffc638e1175786e406a084fd3e271a.jpg";

function Subscriber() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        // backgroundImage: `url(${BgsportImg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        bgcolor: "#ffffff",
        mt: 5,
        height: 350,
        padding: 2,
        transition: "transform 0.3s ease",
        boxShadow:
          " 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: isSmallScreen ? 5 : 10,
            pt: { xs: 3, sm: 10 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: "100%",
              fontWeight: "bold",
              fontSize: { xs: 28, sm: 40 },
              color: "GrayText",
              textAlign: "center",
              pt: { xs: 2, sm: 3 },
              textShadow: "1px 1px",
            }}
          >
            Biz sizning ishonchingizni oshiramiz
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={isSmallScreen ? 3 : 5}
            justifyContent="center"
            sx={{ mt: { xs: 4, sm: 0 } }}
          >
            {[
              { value: "10k+", label: "Foydalanuvchilar" },
              { value: "60+", label: "Sheriklar" },
              { value: "42+", label: "Eng yaxshi murabbiylar" },
            ].map((stat, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 140, sm: 180 },
                  height: { xs: 140, sm: 180 },
                  background:
                    "linear-gradient(135deg, #ffd1bef6 0%, #ff6f61 100%)",
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  textShadow: "0.5px 0.5px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.3)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: { xs: 20, sm: 24 },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    fontSize: { xs: 12, sm: 16 },
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Subscriber;
