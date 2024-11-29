import React, { useState } from "react";
import NavBar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import {
  Box,
  Typography,
  IconButton,
  Rating,
  TextField,
  Stack,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Snackbar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

const ProgramPage = () => {
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState<number[]>(Array(20).fill(0));
  const [dislikes, setDislikes] = useState<number[]>(Array(20).fill(0));
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const programs = [
    {
      title: "Kardio",
      description:
        "Yurak-qon tomir tizimini yaxshilash, kaloriyalarni yoqish va vaznni kamaytirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/nU7am82Y_IE",
    },
    {
      title: "Kuchli mashqlar",
      description:
        "Mushaklarni kuchaytirish va shakllantirish tana holatini yaxshilash  kayfiyatni yaxshilash.",
      difficulty: "O'rta",
      duration: "45 daqiqa",
      videoUrl: "https://www.youtube.com/embed/StB5igY9viA",
    },
    {
      title: "Yoga va stretching",
      description:
        "Moslashuvchanlikni oshirish, mushaklarning cho‘zilishi va tana holatini yaxshilash.",
      difficulty: "Oson",
      duration: "60 daqiqa",
      videoUrl: "https://www.youtube.com/embed/_8kV4FHSdNA",
    },
    {
      title: "Kuchli mashqlar",
      description: "Mushaklarni kuchaytirish uchun ideal.",
      difficulty: "O'rta",
      duration: "45 daqiqa",
      videoUrl: "https://www.youtube.com/embed/video_id_2",
    },
    {
      title: "CrossFit va funksional trening",
      description:
        "Umumiy jismoniy holatni yaxshilash va turli jismoniy qobiliyatlarni rivojlantirish.",
      difficulty: "O'rta",
      duration: "45 daqiqa",
      videoUrl: "https://www.youtube.com/embed/v9G47ToFltY",
    },
    {
      title: "Zumba va aerobika",
      description:
        "Ritmik harakatlar orqali kaloriyalarni yo‘qotish va kayfiyatni yaxshilash.",
      difficulty: "O'rta",
      duration: "45 daqiqa",
      videoUrl: "https://www.youtube.com/embed/K6WkZSaNh_o",
    },
    {
      title: "Boks va jang san’ati mashg'ulotlari",
      description:
        "Kuch, koordinatsiya va o‘zini himoya qilish qobiliyatlarini rivojlantirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/2xaF2deV3YY",
    },
    {
      title: "Pilates",
      description:
        "Tananing markaziy qismini kuchaytirish, muvozanatni yaxshilash va mushaklarni cho‘zish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/U5O_qEcWqGo",
    },
    {
      title: "Powerlifting va bodybuilding",
      description: "Maksimal kuch va mushak hajmini oshirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/Kd9CorRKoZ0",
    },
    {
      title: "TRX Trening (Suspension Training)",
      description:
        "Tana og'irligi bilan ishlash orqali kuch, muvozanat va moslashuvchanlikni oshirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/pJ4gl5W2sss",
    },
    {
      title: "HIIT (High-Intensity Interval Training)",
      description:
        "Tez va samarali kaloriya yoqish, yurak faoliyatini yaxshilash.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/-hSma-BRzoo",
    },
    {
      title: "Jismoniy terapiya mashg‘ulotlari",
      description:
        "Jarohatlardan so‘ng tiklanish yoki o‘ziga xos sog‘liq muammolarini yaxshilash.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/eGCvvJhgdsM",
    },
    {
      title: "Qorin mushaklari va o'zagi (Core Training)",
      description:
        "Qorin mushaklarini mustahkamlash va umumiy tana barqarorligini oshirish.",
      difficulty: "Oson",
      duration: "8:26 daqiqa",
      videoUrl: "https://www.youtube.com/embed/4o7TQmIr97k",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Aqua Fitness (Suvdagi mashqlar)",
      description: "Past ta’sirli mashqlar bilan mushaklarni kuchaytirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl:
        "https://www.youtube.com/embed/3DP6lmlgXS0?list=PL3tovawPYupBxnFRtSGA48evRw",
    },
    {
      title: "Cycling (Velosport)",
      description: "Oyoq mushaklarini mustahkamlash va chidamlilikni oshirish.",
      difficulty: "Oson",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/Jk7rliZpuSs",
    },
    {
      title: "Calisthenics",
      description:
        "Tana og‘irligi bilan ishlash orqali kuch va moslashuvchanlikni oshirish.",
      difficulty: "Qiyin",
      duration: "30 daqiqa",
      videoUrl: "https://www.youtube.com/embed/euMOF0Vwliw",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },

    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
    {
      title: "Kickboxing va Muay Thai",
      description:
        "Kardio va kuchni birlashtirgan jang san'ati texnikasini o‘rgatish.",
      difficulty: "Oson",
      duration: "13:07 daqiqa",
      videoUrl: "https://www.youtube.com/embed/uFJSSYECov4",
    },
  ];

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleDislike = (index: number) => {
    const updatedDislikes = [...dislikes];
    updatedDislikes[index] += 1;
    setDislikes(updatedDislikes);
  };

  const handleShare = (videoUrl: string) => {
    setShareLink(videoUrl);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack
      bgcolor={"#290f0fe9"}
      sx={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <NavBar />
      <Box sx={{ p: 2, bgcolor: "#f5f5f5" }}>
        <Typography variant="h4" sx={{ mb: 3, ml: 10, color: "GrayText" }}>
          <b> Gym Dasturlari</b>
        </Typography>
        <Grid container spacing={3}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="iframe"
                  height="250"
                  src={program.videoUrl}
                  title={program.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Murakkablik: {program.difficulty} | Davomiylik:{" "}
                    {program.duration}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton color="primary" onClick={() => handleLike(index)}>
                    <ThumbUpIcon sx={{ color: "blue" }} />
                  </IconButton>
                  <Typography variant="caption">
                    {likes[index]} Likes
                  </Typography>
                  <IconButton
                    color="error"
                    onClick={() => handleDislike(index)}
                  >
                    <ThumbDownIcon sx={{ color: "blue" }} />
                  </IconButton>
                  <Typography variant="caption">
                    {dislikes[index]} Dislikes
                  </Typography>
                  <IconButton
                    color="secondary"
                    onClick={() => handleShare(program.videoUrl)}
                  >
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Stack>
  );
};

export default ProgramPage;
