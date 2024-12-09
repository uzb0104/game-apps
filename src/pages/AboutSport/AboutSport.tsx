import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import { supabase } from "utils/supabase";

interface Sport {
  id: any;
  name: string;
  title: string;
  image: string;
}

const AboutSport = () => {
  const [getDataSports, setDataSports] = useState<Sport[]>([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("sport").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    setDataSports(data);
    return data;
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack>
      <Stack bgcolor={"#290f0fe9"}>
        <NavBar />
      </Stack>
      <Stack>
        <Box sx={{ p: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "GrayText",
              fontWeight: "bold",
            }}
          >
            Sport Turlari Haqida
          </Typography>
          <Grid container spacing={3}>
            {getDataSports.map((item, index) => (
              <Grid
                item
                xs={12}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 5,

                    height: 400,
                    transition: "transform 0.3s ease-in-out",
                    ":hover": {
                      transform: "scale(1)",
                      boxShadow: 10,
                    },
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={10} alignItems="center">
                      <Box
                        component="img"
                        src={`img/${item.image}`}
                        alt={`${item.name} rasmi`}
                        sx={{
                          width: 300,
                          height: 250,
                          borderRadius: 2,
                          objectFit: "cover",
                        }}
                      />

                      <Box sx={{ alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            mb: 1,
                            color: "GrayText",
                            textAlign: "left",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#2b2727",
                            textAlign: "justify",
                            width: 400,
                          }}
                        >
                          {item.title.slice(0, 100)}...
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Link
                      to={`/sportdetail/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="small" variant="contained" color="success">
                        Batafsil
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AboutSport;
