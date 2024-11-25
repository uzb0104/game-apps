import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Gym from "../../component/img/GymsImage6.jpg";

interface SportDetailsProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  onBack: () => void;
}

const SportDetails: React.FC<SportDetailsProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  onBack,
}) => {
  return (
    <Stack spacing={4} sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ color: "#1976d2", fontWeight: "bold" }}>
        {title}
      </Typography>
      {imageUrl && (
        <Box
          component="img"
          src={Gym}
          alt={title}
          sx={{ maxWidth: "100%", borderRadius: 2, boxShadow: 3 }}
        />
      )}
      <Typography variant="body1" sx={{ color: "#555" }}>
        {description}
      </Typography>
      {videoUrl && (
        <Box>
          <video
            src={videoUrl}
            controls
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>
      )}
      <Button
        variant="outlined"
        color="primary"
        onClick={onBack}
        sx={{ alignSelf: "center" }}
      >
        Ortga qaytish
      </Button>
    </Stack>
  );
};

export default SportDetails;
