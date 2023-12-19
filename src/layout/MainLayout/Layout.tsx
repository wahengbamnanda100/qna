import React from "react";
import { Box, Container, Toolbar, useTheme } from "@mui/material";
import CustomAppBar from "../Appbar/CustomAppBar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.secondary.main,
        // alignItems: "start",
        // justifyContent: "start",
        // bgcolor: "beige",
      }}
    >
      <CustomAppBar />
      <Toolbar />
      <Container
        sx={{
          // width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          // bgcolor: "red",
        }}
      >
        <Sidebar />
        <Box sx={{ width: "100%", pt: "2rem" }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
