import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

const App = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeProvider theme={theme(isDark)}>
      <CssBaseline />
      <Layout handleDark={setIsDark}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
