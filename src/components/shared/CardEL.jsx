import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardEl = ({ title, slug, coverPhoto, author }) => {
  console.log(slug);
  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="194"
          image={coverPhoto.url}
          alt={slug}
        />
        {author && (
          <CardHeader
            avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
            title={
              <Link
                to={`/authors/${author.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            }
          />
        )}
      </Box>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Link to={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
            fontWeight="600"
          >
            {title}
          </Typography>
        </Link>
      </CardContent>
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            sx={{ borderRadius: 3, width: "100%", fontFamily: "inherit" }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;
