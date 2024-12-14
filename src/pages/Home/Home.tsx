import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  IconButton,
  ImageListItemBar,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavBar from "../../component/Navbar/Navbar";
import TopTrainers from "../../component/TopTrainers/TopTrainers";
import Footer from "../../component/Footer/Footer";
import gymbg from "../../component/img/spacious-gym-with-modern-workout-equipment-large-windows-showcasing-expansive-cityscape-panoramic-view-gym-situated-heart-city-ai-generated_585735-19484.avif";
import { supabase } from "utils/supabase";
import { PATH } from "types/path";
import Subscriber from "component/Subscriber/Subscriber";

interface homeGymImg {
  title: string;
  name: string;
  img: string;
}

const Home = () => {
  const [getDataHome, setDataHome] = useState<homeGymImg[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const { data, error } = await supabase.from("Home").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    setDataHome(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? getDataHome.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === getDataHome.length - 1 ? 0 : prevIndex + 1
    );
  };

  const calculateVisibleItems = () => {
    const visibleItems = getDataHome.slice(currentIndex, currentIndex + 4);
    if (visibleItems.length < 4) {
      return visibleItems.concat(getDataHome.slice(0, 4 - visibleItems.length));
    }
    return visibleItems;
  };

  const visiblegetDataHome = calculateVisibleItems();

  const filtereDataHome = getDataHome.filter(
    (gym) =>
      gym.title.toLowerCase().includes(searchQuery) ||
      gym.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          height: 700,
          padding: 2,
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
              width: { xs: "90%", md: "700px" },
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
              width: { xs: "90%", sm: "350px" },
              mx: "auto",
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#fff",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Zallarni qidirish"
              inputProps={{ "aria-label": "Zallarni qidirish" }}
              onChange={handleSearchChange}
              value={searchQuery}
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Stack>
      </Stack>

      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mt: 4,
            color: "GrayText",
            textShadow: "1px 1px",
          }}
        >
          Sport Zallar
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} mt={4}>
          <IconButton onClick={handlePrev} aria-label="Previous">
            <ArrowBackIosNewIcon />
          </IconButton>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {visiblegetDataHome.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Stack position="relative" alignItems="center">
                  <Link
                    to={`${PATH.GYM_INFORMATION}/${item.title}`}
                    aria-label={item.title}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "15px",
                        transition: "transform 0.3s ease",
                      }}
                      src={item.img}
                      alt={item.title}
                    />
                    <ImageListItemBar
                      sx={{
                        mb: 0.5,
                        width: "100%",
                        height: 20,
                        position: "absolute",
                        pb: 3,
                        background: "rgba(0, 0, 0, 0.31)",
                        color: "white",
                        borderRadius: 3,
                      }}
                      title={
                        <Typography variant="h5" textAlign={"center"} pt={3}>
                          {item.title}
                        </Typography>
                      }
                    />
                  </Link>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <IconButton onClick={handleNext} aria-label="Next">
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Container>
      <Stack mb={12}>
        <TopTrainers />
        <Subscriber/>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
