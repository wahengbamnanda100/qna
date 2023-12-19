import {
  Avatar,
  Box,
  Stack,
  Theme,
  Typography,
  lighten,
  useTheme,
} from "@mui/material";
import React from "react";

const QnASideArticleList = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.warning.main}`,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: lighten(theme.palette.warning.main, 0.7),
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 2,
          bgcolor: theme.palette.warning.main,
          fontWeight: "bold",
        }}
      >
        <Typography variant="body1">Heading</Typography>
      </Box>
      <ArticleList theme={theme} />
    </Box>
  );
};

export default QnASideArticleList;

const ArticleList = ({ theme }: { theme: Theme }) => (
  <Stack
    direction="row"
    gap={1}
    sx={{ px: 4, py: 2, fontWeight: theme.typography.subtitle2 }}
  >
    <Avatar sx={{ height: "1rem", width: "1rem" }} />
    <Typography variant="subtitle2">This article list</Typography>
  </Stack>
);
