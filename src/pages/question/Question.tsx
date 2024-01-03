import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import QnATitle from "../../common/QnATitle";
import QuestionsRightContent from "../../components/QuestionsRightContent";
import CountDetails from "../../components/CountDetails";
import AskQustion from "../../components/AskQustion";
import { markDownText } from "../../utils/markdownText";
import { markdownAnswer } from "../../utils/markdownAnswers";
import StackoverflowEditor from "../../components/StackoverflowEditor";
import Comments from "../../components/Comments";

const Qusetion = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack direction={"column"} alignItems={"flex-start"} gap={"1rem"}>
        <QnATitle title="Another testing question for Stack Overflow" />
        <CountDetails />
      </Stack>
      <Divider sx={{ borderBottom: `2px solid #fff`, mt: "1rem" }} />
      <Stack direction={"row"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "70%",
            p: "1.5rem",
          }}
        >
          <AskQustion data={markDownText} />
          <Divider
            sx={{
              width: "100%",
              mt: "2rem",
              borderBottom: `2px solid #fff`,
            }}
          />
          <Typography variant="h6" sx={{ py: "2rem" }}>
            1 Answer
          </Typography>
          <AskQustion data={markdownAnswer} />

          <Divider
            sx={{
              width: "100%",
              mt: "2rem",
              borderBottom: `2px solid #fff`,
            }}
          />

          <Typography variant="h6" sx={{ py: "2rem" }}>
            Your Answer
          </Typography>

          <StackoverflowEditor />

          <Button
            variant="contained"
            sx={{ borderRadius: "0.2rem", width: "auto", marginTop: "2rem" }}
          >
            Post Your Answer
          </Button>
        </Box>
        <Box sx={{ width: "30%" }}>
          <QuestionsRightContent />
        </Box>
      </Stack>
    </Box>
  );
};

export default Qusetion;
