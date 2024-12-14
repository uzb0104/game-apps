import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/server/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

interface SearchExercisesProps {
  setExercises: React.Dispatch<React.SetStateAction<any[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const SearchExercises: React.FC<SearchExercisesProps> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData<string[]>(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["Hammasi", ...bodyPartsData]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData<any[]>(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );

        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

        setSearch("");
        setExercises(searchedExercises);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="20px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "36px", xs: "24px" },
          textAlign: "center",
          mb: "30px",
          color: "#1E293B",
        }}
      >
        O'zingiz uchun mos mashqlarni  qidiring!
      </Typography>
      <Box position="relative" mb="40px" sx={{ width: "100%", maxWidth: "600px" }}>
        <TextField
          fullWidth
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "8px",
              paddingLeft: "16px",
              color: "#1E293B",
            },
            backgroundColor: "#F1F5F9",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#E2E8F0",
              },
              "&:hover fieldset": {
                borderColor: "#A0AEC0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FF2625",
              },
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Mashq nomini kiriting"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            height: "48px",
            position: "absolute",
            right: "10px",
            top: "4px",
            fontSize: "16px",
            padding: "0 20px",
            borderRadius: "8px",
            "&:hover": {
              bgcolor: "#D53F2E",
            },
          }}
          onClick={handleSearch}
        >
          Qidirish
        </Button>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "800px", overflowX: "auto" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
