import {
  Box,
  IconProps,
  Stack,
  Theme,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";

export interface QNASideArticleListPorps {
  title: string;
  blog: blogType;
}
type blogType = {
  icons: React.FC<IconProps>;
  content: string;
}[];

const QnASideArticleList = ({ blog }: { blog: QNASideArticleListPorps }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.warning.main}`,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        bgcolor: alpha(theme.palette.warning.main, 0.5),
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2,
          width: "100%",
          bgcolor: theme.palette.warning.main,
          fontWeight: "bold",
        }}
      >
        <Typography variant="body1">{blog.title}</Typography>
      </Box>
      {(blog.blog as blogType).map((item, index) => (
        <ArticleList key={index} theme={theme} content={item.content} />
      ))}
    </Box>
  );
};

export default QnASideArticleList;

const ArticleList = ({ theme, content }: { theme: Theme; content: string }) => (
  <Stack
    direction="row"
    gap={1}
    justifyContent={"flex-start"}
    sx={{ px: 3, py: 2, fontWeight: theme.typography.subtitle2 }}
  >
    <CreateIcon sx={{ height: "1rem", width: "1rem" }} />
    <Typography variant="subtitle2" fontWeight={"light"}>
      {content}
    </Typography>
  </Stack>
);
