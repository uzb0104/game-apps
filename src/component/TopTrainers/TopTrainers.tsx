import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { supabase } from "utils/supabase";

interface TopTrainers {
  img: string;
  name: string;
  info: string;
  title: string;
}

const TopTrainers = () => {
  const [getTopTrainer, setTopTrainer] = useState<TopTrainers[]>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchData = async () => {
    const { data, error } = await supabase.from("Trainers").select("*");

    if (error) {
      console.error("error fetching data:", error);
      return null;
    }

    setTopTrainer(data);
    return data;
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Stack spacing={4} sx={{ px: 2, mt: 4 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          sx={{ color: "GrayText",  textShadow: "1px 1px", }}
        >
          Murabbiylar tavsiyalari
        </Typography>
        <Grid container spacing={2}>
          {getTopTrainer.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  mx: "auto",
                  gap: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#b8a4a415",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={isSmallScreen ? "150" : "200"}
                  image={`img/${item.img}`}
                  alt={item.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "#555",
                        textAlign: "center",
                        fontSize: isSmallScreen ? "1rem" : "1.2rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontStyle: "italic",
                        textAlign: "center",
                        fontSize: isSmallScreen ? "0.8rem" : "1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      sx={{
                        color: "#333",
                        fontStyle: "italic",
                        fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                      }}
                    >
                      {item.info}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default TopTrainers;
