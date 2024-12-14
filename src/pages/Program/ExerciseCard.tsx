import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  gifUrl: string;
}

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => (
  <Link
    className="exercise-card"
    to={`/exercise/${exercise.id}`}
    style={{ textDecoration: "none" }}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      style={{
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
    <Stack direction="row" gap="16px" mt="16px">
      <Button
        sx={{
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
          padding: "8px 16px",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
          padding: "8px 16px",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
