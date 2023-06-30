import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardEl = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card
      sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug}/>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{marginLeft: 2}}/>}
        title={<Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>}
      />
      <CardContent>
        <Typography component="h3" variant="h6" color="text.primary" fontWeight="600">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" sx={{borderRadius: 3, width: "100%", fontFamily: "inherit"}}>مطالعه مقاله</Button>
      </CardActions>
    </Card>
  );
};

export default CardEl;
