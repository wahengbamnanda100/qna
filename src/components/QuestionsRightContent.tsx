import { Box, useTheme } from "@mui/material";

import QnASideArticleList from "../common/QnASideArticleList";
import { sideArticle } from "../common/sideArticleData";

const QuestionsRightContent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100%",
        pt: "24px",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
      }}
    >
      {sideArticle.map((data, index) => (
        <QnASideArticleList key={index} blog={data as any} />
      ))}
    </Box>
  );
};

export default QuestionsRightContent;
