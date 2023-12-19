import { Container, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Paper
      sx={{ bgcolor: theme.palette.secondary.dark, py: "2rem", px: "2rem" }}
    >
      <Container>
        <Typography variant="h6" color={"primary.contrastText"}>
          QnA footer
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
