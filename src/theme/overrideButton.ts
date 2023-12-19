import { Components, lighten, Palette } from "@mui/material";

export const overridesButton = (
  palette: Palette,
): Pick<Components, "MuiButton"> => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "login" },
        style: {
          color: palette.primary.contrastText,
          backgroundColor: palette.primary.main,
          fontSize: "1.2rem",
          fontWeight: "500",
          padding: "0.75rem 1.7rem",
          width: "100%",
          "&:hover": {
            backgroundColor: lighten(palette.primary.main, 0.1),
          },
        },
      },
      {
        props: { variant: "common" },
        style: {
          textTransform: "capitalize",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
          boxSizing: "border-box",
          marginLeft: "0.5rem",
          padding: "0.2rem 0.9rem",
          width: "fit-content",
          minHeight: "2.3rem",
        },
      },
      {
        props: { variant: "common", color: "primary" },
        style: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          "&:hover": {
            backgroundColor: lighten(palette.primary.main, 0.1),
          },
          border: `1px solid ${palette.primary.main}`,
        },
      },
      {
        props: { variant: "common", className: "cancel" },
        style: {
          backgroundColor: palette.primary.contrastText,
          color: palette.primary.main,
          "&:hover": {
            backgroundColor: palette.primary.contrastText,
          },
          border: `1px solid ${palette.primary.main}`,
        },
      },
      {
        props: {
          variant: "common",
          className: "cancel_delete",
        },
        style: {
          backgroundColor: palette.error.contrastText,
          color: palette.error.main,
          "&:hover": {
            backgroundColor: palette.primary.contrastText,
          },
          border: `1px solid ${palette.error.main}`,
        },
      },
      {
        props: { variant: "common", color: "secondary" },
        style: {
          backgroundColor: palette.primary.contrastText,
          color: palette.primary.main,
          "&:hover": {
            backgroundColor: palette.primary.contrastText,
          },
          border: `1px solid ${palette.primary.main}`,
        },
      },
      {
        props: { variant: "common", color: "warning" },
        style: {
          backgroundColor: palette.warning.main,
          color: palette.warning.contrastText,
          "&:hover": {
            backgroundColor: lighten(palette.warning.main, 0.1),
          },
          border: `1px solid ${palette.warning.main}`,
        },
      },
      {
        props: { variant: "common", color: "error" },
        style: {
          backgroundColor: palette.error.main,
          color: palette.error.contrastText,
          "&:hover": {
            backgroundColor: lighten(palette.error.main, 0.1),
          },
          border: `1px solid ${palette.error.main}`,
        },
      },
    ],
  },
});
