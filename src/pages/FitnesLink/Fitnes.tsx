import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import NavBar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const Fitness = () => {
  const [goal, setGoal] = useState("");
  const [timeAvailable, setTimeAvailable] = useState(30);
  const [fitnessLevel, setFitnessLevel] = useState("Boshlang'ich");
  const [customPlan, setCustomPlan] = useState<string | null>(null);

  const handleGoalChange = (event: SelectChangeEvent<string>) =>
    setGoal(event.target.value);

  const handleTimeChange = (event: Event, newValue: number | number[]) =>
    setTimeAvailable(newValue as number);

  const handleFitnessLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setFitnessLevel(event.target.value);

  const generatePlan = () => {
    const recommendation = `Har kuni ${timeAvailable} daqiqa davomida '${goal}' maqsadingizga erishish uchun ${fitnessLevel} darajadagi mashqlarni bajaring. 
      Mashg‘ulotlarni muntazam bajaring va o‘z maqsadingizga erishishda bardavom bo‘ling!`;

    const motivation = goal.includes("vazn")
      ? `Sabrli bo‘ling va harakat qiling, bu sizni kuchli va sog‘lom qiladi!`
      : `Har bir mashg‘ulot yangi qadam. Bugun boshlang va natijalarni kuzating!`;

    setCustomPlan(`${recommendation}\n${motivation}`);
  };

  const goals = [
    "Vazn qo'shish",
    "Vazn yo'qotish",
    "Mushaklarni kuchaytirish",
    "Flexibilityni oshirish",
    "Sog'lom turmush tarzini yaratish",
    "Kardio mashqlari qilish",
    "Tana shaklini yaxshilash",
    "Sabrni oshirish",
    "Yengil mashqlar bilan tizzalarni kuchaytirish",
    "Sport natijalarini yaxshilash",
    "Yurak salomatligini oshirish",
    "Orqa mushaklarini kuchaytirish",
    "Yengil yengillikni oshirish",
    "Yoga qilish",
    "Koordinatsiyani yaxshilash",
  ];

  return (
    <Stack bgcolor={"#290f0fe9"}>
      <NavBar />
      <Box
        sx={{
          p: 3,
          bgcolor: "#f5f5f5",

          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Fitness Rejangizni Yaratish
        </Typography>

        <Stack spacing={3} sx={{ flexGrow: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="goal-label">Maqsad</InputLabel>
            <Select
              labelId="goal-label"
              value={goal}
              onChange={handleGoalChange}
              label="Maqsad"
            >
              {goals.map((goalOption, index) => (
                <MenuItem key={index} value={goalOption}>
                  {goalOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography variant="body1">
            Mavjud Vaqt (daqiqa): {timeAvailable}
          </Typography>
          <Slider
            value={timeAvailable}
            onChange={handleTimeChange}
            min={10}
            max={120}
            step={5}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} daqiqa`}
          />

          <Typography variant="body1">
            Fitnes Darajasi: {fitnessLevel}
          </Typography>

          <Button variant="contained" color="primary" onClick={generatePlan}>
            Rejani Yaratish
          </Button>

          {customPlan && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Sizning Fitnes Rejangiz:</Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {customPlan}
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>

      <Footer />
    </Stack>
  );
};

export default Fitness;
