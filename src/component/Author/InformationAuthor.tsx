import React, { useState } from "react";
import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { Star } from "@mui/icons-material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import myImg from "../img/AuthorImages.jpg";
import FriendImg from "../img/photo_2024-09-30_22-15-18.jpg";
import Friend1 from "../img/photo_2024-11-27_14-39-49.jpg";

const authorData = [
  {
    name: "Abbosbek Omonov",
    profession: "Software Developer",
    avatar: myImg,
    review:
      "Sport – bu insonning jismoniy va aqliy qobiliyatlarini rivojlantirish va sinovdan o'tkazish uchun mo'ljallangan faoliyat turi.",
  },
  {
    name: "Firdavs Rustamov",
    profession: "Software Developer",
    avatar: FriendImg,
    review:
      "Sport bizga irodani mustahkamlash, mashaqqatlarga bardosh berishni o'rgatadi va salomatlikni yaxshilash uchun ajoyib vosita.",
  },
  {
    name: "Qahramon Qodirov",
    profession: "Backend Developer",
    avatar: Friend1,
    review:
      "Sport inson hayotiga jismoniy, aqliy va hissiy jihatdan ijobiy ta'sir ko'rsatadi.",
  },
];

const InformationAuthor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? authorData.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === authorData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentAuthor = authorData[currentIndex];

  return (
    <Box
      sx={{
        bgcolor: "#3d3838",
        color: "white",
        mt: 6,
        py: 5,
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "400px",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Members
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 4, md: 10 }}
        alignItems="center"
      >
        <Stack direction={"column"} gap={3} alignItems="center">
          <Avatar
            src={currentAuthor.avatar}
            alt={currentAuthor.name}
            sx={{
              width: { xs: 150, md: 250 },
              height: { xs: 150, md: 250 },
            }}
          />
          <Box textAlign="center">
            <Typography fontWeight="bold">{currentAuthor.name}</Typography>
            <Typography variant="body2" color="gray">
              {currentAuthor.profession}
            </Typography>
          </Box>
        </Stack>

        <Stack pt={{ xs: 0, md: 5 }} textAlign={{ xs: "center", md: "left" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 3,
              gap: 0.5,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} sx={{ color: i < 4 ? "#FFA500" : "#fff" }} />
            ))}
          </Box>
          <Typography
            variant="body1"
            sx={{
              maxWidth: { xs: "100%", md: 500 },
              mt: 2,
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            {currentAuthor.review}
          </Typography>
        </Stack>
      </Stack>

      <Box mt={4} display="flex" gap={2}>
        <IconButton
          sx={{ color: "#FFA500" }}
          onClick={() => handleNavigation("prev")}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{ color: "#FFA500" }}
          onClick={() => handleNavigation("next")}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InformationAuthor;
