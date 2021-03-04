import React from "react";
import Post from "../Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid className={classes.container} container spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
