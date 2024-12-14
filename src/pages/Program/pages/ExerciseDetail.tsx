import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../../utils/server/fetchData";
import Detail from "../Detail";
import ExerciseVideos from "../ExerciseVideos";
import SimilarExercises from "../SimilarExercises";
import { Video } from "../../../types/body";

interface ExerciseDetail {
  id: string;
  name: string;
  target: string;
  equipment: string;
  bodyPart: string;
  gifUrl: string;
}

const ExerciseDetail: React.FC = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetail | null>(
    null
  );
  const [exerciseVideos, setExerciseVideos] = useState<Video[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    ExerciseDetail[]
  >([]);
  const [equipmentExercises, setEquipmentExercises] = useState<
    ExerciseDetail[]
  >([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseDetailData = await fetchData<ExerciseDetail>(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData<{ contents: Video[] }>(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents || []);

        const targetMuscleExercisesData = await fetchData<ExerciseDetail[]>(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData<ExerciseDetail[]>(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error(
          "Mashqlar ma'lumotlarini olishda xatolik yuz berdi",
          error
        );
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>Ma'lumotlar mavjud emas</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
