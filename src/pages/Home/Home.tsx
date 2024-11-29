import { Link } from "react-router-dom";
import { PATH } from "../../types/path";
import {
  Grid,
  IconButton,
  ImageListItemBar,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import GymImg from "../../component/img/gymsImage1.jpg";
import GymImg2 from "../../component/img/gymiImages2.jpg";
import GymImg3 from "../../component/img/GymsImage3.jpg";
import GymImg4 from "../../component/img/GymsImage4.jpg";
import GymImg5 from "../../component/img/GymsImages5.jpg";
import GymImg6 from "../../component/img/GymsImage6.jpg";
import GymImg7 from "../../component/img/GymsImage7.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import gymbg from "../../component/img/spacious-gym-with-modern-workout-equipment-large-windows-showcasing-expansive-cityscape-panoramic-view-gym-situated-heart-city-ai-generated_585735-19484.avif";
import NavBar from "../../component/Navbar/Navbar";
import TopTrainers from "../../component/TopTrainers/TopTrainers";
import InformationAuthor from "../../component/Author/InformationAuthor";
import GymsImages from "../../component/Gymimages/GymsImages";
import Footer from "../../component/Footer/Footer";

type Props = {};

const Home = (props: Props) => {
  const items = [
    {
      src: GymImg,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: GymImg2,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },

    {
      src: GymImg4,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: GymImg5,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: GymImg6,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: GymImg7,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
    {
      src: GymImg3,
      title: "Premier Zal",
      desc: "Narsalaringizni saqlash uchun toza, xavfsiz va sanitariya muhiti.",
    },
  ];

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
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mt: 4,
          color: "#130606",
        }}
      >
        Sport Zallar
      </Typography>
      <Grid
        container
        spacing={2}
        mt={3}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Stack
              position="relative"
              alignItems="center"
              sx={{
                "&:hover img": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Link to={PATH.GYM_INFORMATION + "/" + item.title}>
                <img
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={item.src}
                  alt={item.title}
                />
              </Link>
              <ImageListItemBar
                sx={{
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
                title={
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </Typography>
                }
                subtitle={
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.desc}
                  </Typography>
                }
                position="bottom"
              />
            </Stack>
          </Grid>
        ))}
      </Grid>

      <TopTrainers />
      {/* <InformationAuthor /> */}
      <GymsImages />

      <Footer />
    </>
  );
};

export default Home;
