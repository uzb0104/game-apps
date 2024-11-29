import React from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";
import Gym from "../img/spacious-gym-with-modern-workout-equipment-large-windows-showcasing-expansive-cityscape-panoramic-view-gym-situated-heart-city-ai-generated_585735-19484.avif";
import Gym2 from "../img/gymsImage1.jpg";
import Gym3 from "../img/GymsImage3.jpg";
import Gym4 from "../img/GymsImage4.jpg";
import Gym5 from "../img/GymsImages5.jpg";
import Gym6 from "../img/GymsImage6.jpg";
import Gym7 from "../img/GymsImage7.jpeg";
import Gym8 from "../img/gymiImages2.jpg";
const GymGallery: React.FC = () => {
  const images = [Gym, Gym2, Gym3, Gym4, Gym5, Gym6, Gym7, Gym8, Gym];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={src}
                alt={`Gym ${index + 1}`}
                sx={{
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#b8a4a415",
                  },
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GymGallery;
