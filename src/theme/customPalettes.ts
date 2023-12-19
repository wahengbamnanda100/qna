import { PaletteOptions } from "@mui/material";

export const defaultPalette: PaletteOptions = {
  mode: "light",
  primary: {
    // light: "#E7F6FF",
    light: "#d55448",
    main: `#9a2819`,
    dark: "#aa3023",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#555555",
    main: "#262626",
    dark: "#000000",
    contrastText: "#000",
  },
  error: {
    light: "#FFCCCC ",
    main: "#EC7474",
    dark: "#000",
    contrastText: "#fff",
  },
  warning: {
    light: "#FFF6E8",
    main: "#FC9D10",
    dark: "#000",
    contrastText: "#fff",
  },
  info: {
    light: "#E2E3EC",
    main: "#04bad2",
    dark: "#000",
    contrastText: "#000",
  },
  success: {
    light: "#00a14a",
    main: "#009F49",
    dark: "#000",
    contrastText: "#000",
  },
  text: {
    primary: "#000",
    secondary: "#0072bb",
    disabled: "#303f9f",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "#E8EDF1",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
