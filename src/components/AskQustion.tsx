import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
// import { marked } from "marked";c
// import HIghlightCode from "../common/HIghlightCode";
// import { markDownText } from "../utils/markdownText";
import MarkdownRenderer from "../common/MarkdownRenderer";
import { GroupTag } from "../common/QnAQusetionCard";

const Upvote = () => {
  const [count, setCount] = useState(0);

  const handleCount = (type: string) => {
    if (type === "upVote") {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <IconButton
        onClick={() => handleCount("upVote")}
        sx={{
          p: "0.5rem",
          width: "60px",
          height: "60px",
          border: `1px solid #fff`,
        }}
      >
        <ArrowDropUpIcon sx={{ color: "#fff", fontSize: "4em" }} />
      </IconButton>
      <Typography variant="h5">{count}</Typography>
      <IconButton
        onClick={() => handleCount("downVote")}
        sx={{
          p: "0.5rem",
          width: "60px",
          height: "60px",
          border: `1px solid #fff`,
        }}
      >
        <ArrowDropDownIcon sx={{ color: "#fff", fontSize: "4em" }} />
      </IconButton>
      <IconButton>
        <BookmarkBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <RestoreOutlinedIcon />
      </IconButton>
    </Box>
  );
};

const FullQuestion = ({ question }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* <AnswerText text="My code as following:" /> */}
      {/* <HIghlightCode code={markDownText} /> */}
      <MarkdownRenderer markdownContent={question} />
    </Box>
  );
};

const UserOperation = () => {
  // const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      width={"100%"}
      marginTop={"2rem"}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="text">Share</Button>
        <Button variant="text">Edit</Button>
        <Button variant="text">Follow</Button>
        <Button variant="text">Flag</Button>
      </Stack>

      <Typography variant="subtitle2">eidited 4 hours ago</Typography>

      <Typography>User info</Typography>
    </Stack>
  );
};

const tags = [
  { id: 3, tag: "HTML" },
  { id: 4, tag: "node js" },
];

const AskQustion = ({ data }: any) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "2rem",
      }}
    >
      <Box sx={{ width: "5%" }}>
        <Upvote />
      </Box>
      <Box sx={{ width: "90%" }}>
        <FullQuestion question={data} />
        <GroupTag tags={tags} theme={theme} />
        <UserOperation />
      </Box>
    </Box>
  );
};

export default AskQustion;
