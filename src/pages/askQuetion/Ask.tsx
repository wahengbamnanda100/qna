import {
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  // useTheme,
} from "@mui/material";
import React from "react";

import AskIcons from "../../assets/Ask_bg_icons";
import CustomAppBar from "../../layout/Appbar/CustomAppBar";
import QuestionBody from "../../components/QuestionBody";
import QuestionHelp from "../../components/QuestionHelp";

const Ask = () => {
  // const theme = useTheme();
  return (
    <Box
      sx={{
        // bgcolor: theme.palette.grey[900],
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <CustomAppBar />
      <Toolbar />
      <Container sx={{ position: "relative" }}>
        <AskIcons
          style={{
            position: "absolute",
            top: -1,
            // bottom: 1,
            right: 0,
            width: "700px",
            height: "120px",
            // backgroundColor: "red",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            py: "4rem",
          }}
        >
          Ask a public question
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <Box sx={{ flex: 8 }}>
            <QuestionBody />
            <Button
              variant="contained"
              sx={{
                my: "1rem",
              }}
            >
              Post your question
            </Button>
          </Box>
          <Box sx={{ flex: 3 }}>
            <QuestionHelp />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Ask;
