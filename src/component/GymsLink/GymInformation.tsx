import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GymImg from "../img/GymsImage6.jpg";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import InformationAuthor from "../Author/InformationAuthor";

const GymDetails = () => {
  const gymInfo = {
    name: "Premier Zal",
    description:
      "Premier Zal – barcha yoshdagilar uchun zamonaviy sport zali. Bu yerda siz jismoniy shaklingizni yaxshilash, sog'lom turmush tarzini rivojlantirish imkoniyatiga ega bo‘lasiz.",
    features: [
      "Zamonaviy trenajyorlar",
      "Yuqori malakali murabbiylar",
      "Shaxsiy mashg'ulot dasturlari",
      "Kardio va kuch mashg'ulotlari uchun jihozlar",
      "Yoga va guruh mashg'ulotlari",
    ],
    address: "Jizzax shahar Sh.Rashidov ko'chasi 31-uy",
    workingHours: "Dushanba - Yakshanba: 9:00 - 22:00",
    contact: "+998 99 454 01 04",
    image: GymImg,
  };

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h3"
          sx={{ mb: 4, fontWeight: "bold", color: "#6176d7" }}
        >
          {gymInfo.name}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="400"
                image={gymInfo.image}
                alt={`${gymInfo.name} rasmi`}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {gymInfo.description}
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2, color: "#6176d7" }}
              >
                Xususiyatlar
              </Typography>
              <List>
                {gymInfo.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 2, bgcolor: "#f5f5f5" }}>
              <LocationOnIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                Manzil
              </Typography>
              <Typography variant="body1">{gymInfo.address}</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 2, bgcolor: "#f5f5f5" }}>
              <AccessTimeIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                Ish vaqti
              </Typography>
              <Typography variant="body1">{gymInfo.workingHours}</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2, boxShadow: 2, bgcolor: "#f5f5f5" }}>
              <CallIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                Aloqa
              </Typography>
              <Typography variant="body1">{gymInfo.contact}</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <InformationAuthor />
      <Footer />
    </Stack>
  );
};

export default GymDetails;
