import {
  Autocomplete,
  Box,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StackoverflowEditor from "./StackoverflowEditor";

const tags = [
  { topic: "react", desc: "lorem ipsum" },
  { topic: "vue", desc: "lorem ipsum" },
  { topic: "typescript", desc: "lorem ipsum" },
  { topic: "javascript", desc: "lorem ipsum" },
  { topic: "mui", desc: "lorem ipsum" },
  { topic: "api", desc: "lorem ipsum" },
];

const QuestionBody = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: `rgba(0,0,1,1)`,
        boxShadow: theme.shadows[2],
        padding: "1rem",
      }}
    >
      <Stack direction={"column"} gap={2}>
        <Typography variant="h6">Title</Typography>
        <Typography variant="subtitle2">
          Be specific and imagine you&apos;re asking a question to another
          person
        </Typography>
        <TextField
          variant="outlined"
          placeholder="e.g is there an R function for finding the index of an element in a value"
        />
      </Stack>
      <Stack direction={"column"} gap={2}>
        <Typography variant="h6">Body</Typography>
        <Typography variant="subtitle2">
          include all the information someone would need to answer your question
        </Typography>
        {/* <TextField
          variant="outlined"
          placeholder="e.g is there an R function for finding the index of an element in a value"
        /> */}
        <StackoverflowEditor />
      </Stack>
      <Stack direction={"column"} gap={2}>
        <Typography variant="h6">Tags</Typography>
        <Typography variant="subtitle2">
          Add up to 5 tags to describe what your question is about
        </Typography>
        <Autocomplete
          multiple
          id="tags-standard"
          options={tags}
          getOptionLabel={(option) => option.topic}
          defaultValue={[tags[1]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="e.g (react, javascript)"
            />
          )}
        />
      </Stack>
    </Box>
  );
};

export default QuestionBody;
