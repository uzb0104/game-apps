import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import coach1 from "../img/coach1.jpg";
import coach2 from "../img/coach2.jpg";
import coach3 from "../img/coach3.jpg";
import coach44 from "../img/coach44.jpg";
const trainers = [
  {
    name: "Boltaboy",
    specialty: "Bodybuildin murabbiy",
    image: coach1,
    info: "Boltaboy bodibilding bo'yicha 10 yillik tajribaga ega va mijozlarga fitnes maqsadlariga erishishda yordam beradi.",
  },
  {
    name: "Tesha oy",
    specialty: "Yoga Murabbiy",
    image: coach2,
    info: "Tesha oy 5 yillik yoga o'rgatish tajribasiga ega, moslashuvchanlik va e'tiborga ixtisoslashgan.",
  },
  {
    name: "Ketmonjon",
    specialty: "Cardio Murabbiy",
    image: coach3,
    info: "Ketmonjon kardio mashg'ulotlar bo'yicha mutaxassis va mijozlarga chidamliligini oshirishga yordam berdi.",
  },
  {
    name: "Qavunjon",
    specialty: "Dietolog murabbiy",
    image: coach44,
    info: "Qavunjon samaradorligi va farovonligini oshirish uchun shaxsiylashtirilgan ovqatlanish rejalarini taklif qiladi.",
  },
];

const TopTrainers = () => {
  return (
    <Stack spacing={4} sx={{ px: 15, mt: 6 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        sx={{ color: "#3d76e7" }}
      >
        Eng Yaxshi Murabbiylar
      </Typography>
      <Grid container spacing={1}>
        {trainers.map((trainer, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                mx: "auto",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  bgcolor: "#b8a4a415",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={trainer.image}
                alt={trainer.name}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  sx={{ color: "#555" }}
                >
                  {trainer.name}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {trainer.specialty}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{
                    color: "#333",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                  }}
                >
                  {trainer.info}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TopTrainers;
