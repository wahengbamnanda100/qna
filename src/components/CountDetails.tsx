import { Stack, Typography } from "@mui/material";
import React from "react";

const CountDetails = () => {
  return (
    <Stack
      direction={"row"}
      gap={4}
      justifyContent={"flex-start"}
      width={"100%"}
      alignItems={"center"}
    >
      <Typography variant="subtitle2" fontWeight={"medium"}>
        Asked 4 months ago
      </Typography>
      <Typography variant="subtitle2" color={"grey.400"}>
        <span style={{ fontWeight: "bold" }}>Modified</span> today
      </Typography>
      <Typography variant="subtitle2" fontWeight={"normal"} color={"grey.400"}>
        {/* {formatTimeAgo(new Date(user?.modifiedDate))} */}
        Viewed 100 times
      </Typography>
    </Stack>
  );
};

export default CountDetails;
