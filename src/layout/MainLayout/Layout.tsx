import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import CustomAppBar from "../Appbar/CustomAppBar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  // const theme = useTheme();
  return (
    <Box>
      <CustomAppBar />
      <Toolbar />
      <Container
        sx={{
          // width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "row",
          overflow: "hidden",
          // bgcolor: "red",
        }}
      >
        <Sidebar />
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
