import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import NavBar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { Description } from "@mui/icons-material";

const AboutSport = () => {
  const [selectedSport, setSelectedSport] = useState<
    keyof typeof sportsInfo | null
  >(null);

  const sportsInfo = {
    futbol: {
      title: "Futbol",
      description:
        "Dunyodagi eng mashhur sport turi. Bu o'yin chidamlilik va reflekslarni rivojlantiradi. Futbolchilar katta masofalarni yugurishadi, bu esa yurak-qon tomir tizimiga foydali.",
    },
    basketbol: {
      title: "Basketbol",
      description:
        "Jamoaviy taktikani va tezkorlikni talab qiladigan sport turi. Basketbol yuqori tana mushaklarini kuchaytiradi va sakrash qobiliyatini rivojlantiradi.",
    },
    tennis: {
      title: "Tennis",
      description:
        "Reflekslarni rivojlantirish va chidamlilikni oshirish uchun foydali sport turi. Tennis harakatchanlik va diqqatni oshiradi.",
    },
    yugurish: {
      title: "Yugurish",
      description:
        "Sog'lom turmush tarzining asosi. Yugurish yurak faoliyatini mustahkamlaydi va stressni kamaytirishga yordam beradi.",
    },
    suzish: {
      title: "Suzish",
      description:
        "Butun tana mushaklarini ishlatadigan sport turi. Suzish bo'g'imlarga zarar bermasdan mushaklarni kuchaytiradi va energiya beradi.",
    },
    boks: {
      title: "Boks",
      description:
        "Kuch va chidamlilikni rivojlantiradigan jangovar sport turi.",
    },
    voleybol: {
      title: "Voleybol",
      description:
        "Jamoaviy sport bo'lib, tezkorlik va koordinatsiyani oshiradi.",
    },
    gimnastika: {
      title: "Gimnastika",
      description: "Moslashuvchanlik va kuchni rivojlantiradigan sport turi.",
    },
    Changi: {
      title: "Chang'i",
      description:
        "Qorli joylarda yurak-qon tomir tizimini mustahkamlovchi sport turi.",
    },
    shaxmat: {
      title: "Shaxmat",
      description:
        "Strategik fikrlashni va muammo yechish qobiliyatini oshiradi.",
    },
    badminton: {
      title: "Badminton",
      description:
        "Tezkorlik va reflekslarni talab qiladigan, qiziqarli sport turi.",
    },
    regbi: {
      title: "Regbi",
      description: "Jamoaviy sport bo'lib, kuch va taktikani rivojlantiradi.",
    },
    stol_tennisi: {
      title: "Stol tennisi",
      description: "Reflekslar va tezkor fikrlashni oshiradigan sport.",
    },
    karate: {
      title: "Karate",
      description:
        "O'z-o'zini himoya qilish va kuchni boshqarish uchun jang san'ati.",
    },
    taekvondo: {
      title: "Taekvondo",
      description:
        "Koreys jang san'ati bo'lib, sakrash va kuchni rivojlantiradi.",
    },
    kurash: {
      title: "Kurash",
      description: "O‘zbek sport turi, kuch va chidamlilikni rivojlantiradi.",
    },
    judo: {
      title: "Judo",
      description:
        "Yapon jang san'ati, taktikani va reflekslarni talab qiladi.",
    },
    triatlon: {
      title: "Triatlon",
      description: "Suzish, yugurish va velosipedda harakatni birlashtiradi.",
    },
    marafon: {
      title: "Marafon",
      description:
        "Uzoq masofaga yugurib, chidamlilikni oshiradigan sport turi.",
    },
    velosport: {
      title: "Velosport",
      description: "Velosipedda harakatlanish orqali chidamlilikni oshiradi.",
    },
    eshkak_eshlash: {
      title: "Eshkak eshlash",
      description: "Suv ustida kuch va koordinatsiyani talab qiladi.",
    },
    ot_sporti: {
      title: "Ot sporti",
      description:
        "Ot bilan ishlash orqali muvozanat va diqqatni rivojlantiradi.",
    },
    snoubord: {
      title: "Snoubord",
      description: "Qorda balandliklardan uchishni o'z ichiga oladi.",
    },
    skeytbord: {
      title: "Skeytbord",
      description: "Balans va ijodkorlikni talab qiladigan sport turi.",
    },
    qoya_tirmashish: {
      title: "Qoya tirmashish",
      description:
        "Kuch va tanani boshqarishni talab qiladigan qiyin sport turi.",
    },
    golf: {
      title: "Golf",
      description: "Konsentratsiya va aniqlikni talab qiladigan sport.",
    },
    kabriolet: {
      title: "Kabriolet",
      description: "Jismoniy va aqliy qobiliyatlarni rivojlantiruvchi sport.",
    },

    bilyard: {
      title: "Bilyard",
      description: "Stratejiya va aniqlikni talab qiluvchi o'yin.",
    },
    parkur: {
      title: "Parkur",
      description:
        "Shaharda turli to'siqlardan sakrash va yugurishni o'z ichiga oladi.",
    },

    gammer: {
      title: "Gammer",
      description: "Online O'yinlar",
    },
  };

  const generalInfo =
    "Sport insonning umumiy sog'lig'i va hayot sifatini yaxshilashda muhim rol o'ynaydi. Har bir sport turi jismoniy va aqliy sog'liq uchun foydali.";

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>
      <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", color: "#596ed6" }}
        >
          Sport Turlari Haqida
        </Typography>
        {!selectedSport ? (
          <>
            <Typography
              variant="body1"
              sx={{ mb: 4, textAlign: "center", color: "#555" }}
            >
              {/* {generalInfo} */}
            </Typography>
            <Grid container spacing={3}>
              {Object.keys(sportsInfo).map((key) => {
                const sport = sportsInfo[key as keyof typeof sportsInfo];
                return (
                  <Grid item xs={12} sm={6} md={4} key={key}>
                    <Card
                      sx={{
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: "#fff",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}
                        >
                          {sport.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#555" }}>
                          {sport.description.slice(0, 100)}...
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            setSelectedSport(key as keyof typeof sportsInfo)
                          }
                        >
                          Batafsil
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        ) : (
          <Box textAlign="center">
            <Typography variant="h5" sx={{ mb: 2, color: "#1976d2" }}>
              {sportsInfo[selectedSport].title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
              {sportsInfo[selectedSport].description}
            </Typography>
            {/* <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => setSelectedSport(null)}
            >
              Ortga qaytish
            </Button> */}
          </Box>
        )}
      </Box>
      <Footer />
    </Stack>
  );
};

export default AboutSport;
