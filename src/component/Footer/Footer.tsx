import React from "react";
import { Grid, IconButton, Typography, Box, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon sx={{ color: "#4874e5" }} />,
      url: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon sx={{ color: "#4874e5" }} />,
      url: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon sx={{ color: "#d51717" }} />,
      url: "https://www.instagram.com",
    },
    {
      name: "Telegram",
      icon: <TelegramIcon sx={{ color: "#4874e5" }} />,
      url: "https://t.me/a_omonov01",
    },
  ];
  const usefulLinks = [
    { name: "Asosiy", path: "/" },
    { name: "Program", path: "/Program" },
    { name: "Sport haqida", path: "/Sporthaqida" },
    { name: "Fitnes", path: "/Fitnes" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        py: 6,
        px: 2,
        height: 200,
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            AOGym
          </Typography>
          <Typography variant="body2">
            Biz sizlarga eng yaxshi sport zallarni tavsiya qilamiz.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Foydali Havolalar
          </Typography>
          <Stack spacing={1}>
            {usefulLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  "&:hover": { color: "#ff6f61" },
                }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Biz bilan aloqa
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
            Email: abbosbekomonov04@gmail.com <br />
            Telefon: +998 99 454 01 04
          </Typography>
          <Stack direction="row" spacing={2}>
            {socialLinks.map((social, index) => (
              <IconButton
                sx={{ border: "1px solid #FFF", bgcolor: "#fff" }}
                key={index}
                onClick={() => window.open(social.url, "_blank")}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 2,
          color: "#888",
          "&:hover": { color: "#ff6f61" },
        }}
      >
        © 2024 AOGym. Barcha huquqlar himoyalangan.
      </Typography>
    </Box>
  );
};

export default Footer;
