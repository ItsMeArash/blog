import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Zoom,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong</h3>;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            mt={{ xs: 9, sm: 12 }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight={700}
            >
              {data.post.title}
            </Typography>
            <ArrowBackIcon
              color="primary"
              cursor="pointer"
              onClick={() => navigate(-1)}
            />
          </Grid>
          <Grid item xs={12} mt={6}>
            <img
              src={data.post.coverPhoto.url}
              alt={slug}
              width="100%"
              style={{ borderRadius: 15 }}
            />
          </Grid>
          <Grid item xs={12} mt={7} display="flex" alignItems="center">
            <Avatar
              src={data.post.author.avatar.url}
              sx={{ width: "80px", height: "80px", marginLeft: 2 }}
            />
            <Box component="div">
              <Typography component="p" variant="h5" fontWeight={700}>
                {data.post.author.name}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {data.post.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.post.content.html),
              }}
            ></div>
          </Grid>
          <Grid>
            {/* Date Published */}
            <Typography component="p" variant="p" color="text.secondary">
              تاریخ انتشار: {data.post.datePublished}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CommentForm slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug} />
          </Grid>
        </Grid>
      </Container>

      {showScroll && (
        <Zoom in={true} style={{ position: "fixed", bottom: 50, right: 50 }}>
          <IconButton
            onClick={scrollToTop}
            size="large"
            aria-label="scroll to top"
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Zoom>
      )}
    </>
  );
};

export default BlogPage;
