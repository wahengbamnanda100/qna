import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import _ from "lodash";

const QnATitle = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{ width: "100%" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: theme.typography.fontWeightRegular,
          color: theme.palette.primary.contrastText,
        }}
      >
        {_.startCase(title)}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "capitalize",
          //   color: "primary.contrastText",
        }}
      >
        Ask Question
      </Button>
    </Stack>
  );
};

export default QnATitle;
