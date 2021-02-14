import React, { useEffect } from "react";
import useStyles from "./styles";
import Post from "../Post/Post";

import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
    <div>
      <Post />
    </div>
  );
}

export default Posts;
