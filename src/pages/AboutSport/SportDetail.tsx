import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { supabase } from "utils/supabase";
import Footer from "component/Footer/Footer";
import NavBar from "component/Navbar/Navbar";
import BgImg from "../../component/img/BackgroundImage.jpg";
import { url } from "inspector";

interface SportDetailInformation {
  id: number;
  title: string;
  name: string;
  image: string;
  info: string;
  text: string;
  img: string;
  infoText: string;
  imgLink: string;
  titleSport: string;
}

const SportDetail = () => {
  const [sport, setSport] = useState<SportDetailInformation | null>(null);
  const [loading, setLoading] = useState(true);
  const [gym, setGym] = useState([]);

  const { sportId } = useParams<{ sportId: string }>();

  const fetchSportDetail = async () => {
    try {
      const { data, error } = await supabase
        .from("SportInformation")
        .select("*")
        .eq("id", sportId)
        .single();
      if (error) throw error;
      setSport(data);
      setGym(data.img);
      console.log(data);
    } catch (error) {
      console.error("Error fetching sport details:", error);
    } finally {
      setLoading(false);
    }
  };

  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    fetchSportDetail();
  }, [sportId]);

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center">
        <CircularProgress />
      </Stack>
    );
  }

  if (!sport) {
    return (
      <Container>
        <Typography
          variant="h4"
          color="error"
          align="center"
          fontWeight={"bold"}
          sx={{ mt: 4 }}
        >
          Ma'lumot topilmadi
        </Typography>
      </Container>
    );
  }

  return (
    <Stack>
      <Stack>
        <Stack bgcolor={"#290f0fe9"}>
          <NavBar />
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${BgImg})`,

          backgroundPosition: "center",

          minHeight: "100vh",
        }}
      >
        <Stack>
          <Container sx={{ py: 6, bgcolor: "white" }}>
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#19222c" }}
              >
                {sport.name}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
              >
                {sport.title}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8, mt: 2 }}
              >
                {sport.info}
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Box
                component="img"
                src={sport.image}
                sx={{
                  maxWidth: "100%",
                  width: "95%",
                  height: 500,
                  borderRadius: 8,

                  objectFit: "cover",
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8, mt: 2 }}
              >
                {sport.text}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Box
                component="img"
                src={sport.imgLink}
                sx={{
                  maxWidth: "100%",
                  width: "95%",
                  height: 500,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8, mt: 2 }}
              >
                {sport.infoText}
              </Typography>
            </Box>
          </Container>
          <Container sx={{ py: 6, bgcolor: "white" }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  mt: -5,
                }}
              >
                {sport.titleSport}
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
              {gym.map((item: any, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={item.url}
                      alt={`Image ${index + 1}`}
                      onClick={() => openInNewWindow(item.link)}
                      sx={{
                        width: 200,
                        height: 200,
                        borderRadius: 4,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SportDetail;
