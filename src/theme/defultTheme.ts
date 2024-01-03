import { ThemeOptions } from "@mui/material";

export const defaultTheme: Omit<ThemeOptions, "palette"> = {
  breakpoints: {
    values: {
      xs: 480,
      sm: 767,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "& .MuiPaper-elevation4": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          // fontSize: "0.5rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#fff",
          // backgroundColor: "white",
          borderColor: "#fff",
          "& fieldset": {
            borderColor: "#fff", // Customize the border color
            color: "#fff",
          },
          "&:hover fieldset": {
            borderColor: "#fff", // Customize the border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "green", // Customize the border color when focused
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        input: {
          color: "#fff",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
    // htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 400,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 400,
      fontSize: "3.75rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h6: {
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    subtitle1: {
      fontWeight: 300,
      color: "grey[200]",
      fontSize: "1rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    subtitle2: {
      fontWeight: 200,
      fontSize: "0.875rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    body1: {
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    body2: {
      fontWeight: 300,
      fontSize: "0.875rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};
