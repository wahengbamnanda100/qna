import { Button, ButtonGroup, styled, Theme, useTheme } from "@mui/material";
import React from "react";

const ButtonItem = styled(Button)(({ theme }: { theme: Theme }) => ({
  textTransform: "capitalize",
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.grey[600],
}));

const QnAButtonGroup = () => {
  const theme = useTheme();
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{
        color: "primary.contrastText",
        borderColor: theme.palette.grey[600],
      }}
    >
      <ButtonItem>Interesting</ButtonItem>
      <ButtonItem>Hot</ButtonItem>
      <ButtonItem>Week</ButtonItem>
      <ButtonItem>Month</ButtonItem>
    </ButtonGroup>
  );
};

export default QnAButtonGroup;
