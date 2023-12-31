import { createTheme } from "@mui/material";

const theme = (isDark) => {
  return createTheme({
    typography: {
      fontFamily: `"YekanBakh". "Roboto", "Arial"`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontWeightHeavy: 800,
      fontWeightFat: 900,
    },
    direction: "rtl",
    palette: {
      mode: (isDark ? "dark" : "light"),
    },
  });
};

export default theme;
