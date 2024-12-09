import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Stack,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBarLink } from "./Navbar.style";
import SignUp from "./SignUp";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:820px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const navLinks = [
    { to: "/", text: "Asosiy" },
    { to: "/Program", text: "Program" },
    { to: "/AboutSport", text: "Sport haqida" },
    { to: "/Fitnes", text: "Fitnes" },
  ];

  return (
    <Container>
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
        overflow={"hidden"}
      >
        <Typography
          variant="h4"
          sx={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <SportsMartialArtsIcon fontSize="large" />
          <span style={{ fontWeight: "bold" }}>AOGym</span>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{ color: "white", overflow: "hidden" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  bgcolor: "#1f1f1f",
                  color: "white",
                  height: "100%",
                  overflow: "hidden", // Scroll cheklash uchun
                  p: 2,
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                      <NavBarLink to={link.to}>
                        <ListItemText primary={link.text} />
                      </NavBarLink>
                    </ListItem>
                  ))}
                </List>
                <Box mt={2} display="flex" gap={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      borderRadius: 2,
                      backgroundColor: "#ff6f61",
                      borderColor: "#cdc2c1",
                      maxWidth: "100px",
                      width: "100%",
                      "&:hover": { color: "white" },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      borderRadius: 2,
                      backgroundColor: "#ff6f61",
                      borderColor: "#cdc2c1",
                      maxWidth: "150px",
                      width: "100%",
                      "&:hover": { color: "white" },
                    }}
                  >
                    Ro'yxatdan o'tish
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Stack>
              <Box
                component={"ul"}
                sx={{
                  display: "flex",
                  gap: 5,
                  fontSize: 20,
                  color: "white",
                  listStyle: "none",
                  p: "1px 10px",
                }}
              >
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavBarLink to={link.to}>{link.text}</NavBarLink>
                  </li>
                ))}
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mr: 4, justifyContent: "flex-end", alignItems: "center" }}
            >
              <Button
                component={Link}
                to="/logreg"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "white",
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#ff6f61",
                  borderColor: "#cdc2c1",
                  "&:hover": { color: "white" },
                }}
              >
                Ro'yxatdan o'tish
              </Button>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "auto",
                }}
              >
                {/* <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "white",
                  borderRadius: 2,
                  backgroundColor: "#ff6f61",
                  overflow: "hidden",
                  borderColor: "#cdc2c1",
                  "&:hover": { color: "white" },
                }}
              >
                Sign Up
              </Button> */}
              </Box>
            </Stack>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default NavBar;
