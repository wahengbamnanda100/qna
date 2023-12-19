import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, useTheme } from "@mui/material";

import AppProvider, { useAppProvider } from "./AppProvider";
import CustomThemeProvider from "./theme/CustomThemeProvider";
import Layout from "./layout/MainLayout/Layout";
import "./App.css";
import Questions from "./pages/Questions/Questions";
import Qusetion from "./pages/question/Question";

const AppContent = ({ children }: { children: React.ReactNode }) => {
  const appRef = React.useRef(null);
  const { setNotify } = useAppProvider();
  const theme = useTheme();
  // const localUserDetail = JSON.parse(
  // 	localStorage.getItem("userDetail") || "null"
  // );

  useEffect(() => {
    appRef &&
      appRef?.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      appRef?.current?.addEventListener("click", () => {
        setNotify(undefined);
        // console.log('aaaaa')
      });
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      appRef?.current?.removeEventListener("click", () => {});
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "start",
        // overflowX: "hidden",
        // width: "100vw",
        // height: "100vh",
        bgcolor: theme.palette.secondary.main,
      }}
      ref={appRef}
    >
      {children}
    </Box>
  );
};

function App() {
  return (
    <AppProvider>
      <CustomThemeProvider>
        <CssBaseline />
        <AppContent>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Questions />} />
                <Route path="/question/:id" element={<Qusetion />} />
              </Route>
            </Routes>
          </Router>
        </AppContent>
      </CustomThemeProvider>
    </AppProvider>
  );
}

export default App;
