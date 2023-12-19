import { Box, useTheme } from "@mui/material";
import QnASideArticleList from "../common/QnASideArticleList";
import React from "react";

const QuestionsRightContent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        pt: "24px",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
      }}
    >
      <QnASideArticleList />
    </Box>
  );
};

export default QuestionsRightContent;
