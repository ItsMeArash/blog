import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, error });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error</h3>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
