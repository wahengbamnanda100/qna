import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FlagIcon from "@mui/icons-material/Flag";

const IconButtonContainer = ({ upVote, flag, children }: any) => {
  return (
    <IconButton
      sx={{
        borderRadius: "0",
        p: 0,
        m: 0,
        color: "#fff",
      }}
    >
      {children}
    </IconButton>
  );
};

const CommentActions = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <IconButtonContainer>
        <ArrowDropUpIcon fontSize="medium" sx={{ fontSize: "2em" }} />
      </IconButtonContainer>
      <IconButtonContainer>
        <FlagIcon fontSize="medium" sx={{ fontSize: "1em" }} />
      </IconButtonContainer>
    </Stack>
  );
};

const Comments = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CommentActions />
      <Typography>
        Just FYI, the modal overlay is not animating for me in Firefox. I would
        suggest that applying CSS to the overlay will be extremely
        browser-dependent. If you need this to function consistently across
        multiple browsers, you would probably be better off implementing your
        own dialog control where you will have full control over the UI
      </Typography>
    </Box>
  );
};

export default Comments;
