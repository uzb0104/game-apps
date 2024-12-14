import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";

import Exercises from "../Exercises";
import SearchExercises from "../SearchExercises";
import NavBar from "component/Navbar/Navbar";
import Footer from "component/Footer/Footer";

interface Exercise {
  id: string;
  name: string;
  gifUrl: string;
  target: string;
  equipment: string;
  bodyPart: string;
}

const HomeHome: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>

      <Stack>
        <Container>
          <Box>
            <SearchExercises
              setExercises={setExercises}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            
            />
            <Exercises
              setExercises={setExercises}
              exercises={exercises}
              bodyPart={bodyPart}
            />
          </Box>
        </Container>

        <Footer />
      </Stack>
    </Stack>
  );
};

export default HomeHome;
