import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

interface SimilarExercisesProps {
  targetMuscleExercises: any[];
  equipmentExercises: any[];
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => (
  <Box sx={{ mt: { lg: "80px", xs: "20px" }, p: "20px" }}>
    <Typography
      sx={{
        fontSize: { lg: "36px", xs: "20px" },
        color: "#1E293B",
        textAlign: "left",
        mb: "20px",
      }}
      fontWeight={700}
    >
      O'xshash mashqlar:
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Maqsad mushaklarni ishirish 😁
      </span>
    </Typography>
    <Stack
      direction="row"
      sx={{ p: 2, position: "relative", overflowX: "auto" }}
    >
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "36px", xs: "20px" },
        color: "#1E293B",
        textAlign: "left",
        mt: { lg: "80px", xs: "40px" },
        mb: "20px",
      }}
      fontWeight={700}
    >
      O'xshash mashqlar:
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Jihozlar
      </span>
    </Typography>
    <Stack
      direction="row"
      sx={{ p: 2, position: "relative", overflowX: "auto" }}
    >
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
