import React from "react";
import {
  Stack,
  Typography,
  Paper,
  InputBase,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import gymbg from "../img/spacious-gym-with-modern-workout-equipment-large-windows-showcasing-expansive-cityscape-panoramic-view-gym-situated-heart-city-ai-generated_585735-19484.avif";
import NavBar from "../Navbar/Navbar";
import zallar from "../img/Zal1.jpg";
import zallar3 from "../img/zal3.jpg";

const Header = () => {
  const items = [
    {
      src: zallar,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: zallar,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: zallar3,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: zallar,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: zallar3,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
  ];

  return (
    <Stack>
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          height: 550,
          padding: 3,
          overflow: "hidden",
          backgroundImage: `url(${gymbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: -1,
          },
        }}
      >
        <NavBar />

        <Stack sx={{ textAlign: "center", color: "white", marginTop: 15 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mx: "auto",
              width: 700,
              color: "white",
            }}
          >
            Tana uchun mashqlar va ruh uchun musiqa, mukammal uyg‘unlikni
            yaratadi
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
              mx: "auto",
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Gyms"
              inputProps={{ "aria-label": "search gyms" }}
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Stack>
      </Stack>

      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mt: 4 }}
      >
        Sport Zallar
      </Typography>
      <ImageList cols={4} gap={16} sx={{ padding: 4 }}>
        {items.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.src} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.desc}</span>}
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default Header;
