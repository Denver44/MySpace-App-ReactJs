import React from "react";
import useStyles from "./styles";

import { useSelector } from "react-redux";

import Post from "./Post/Post";
function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("=>  " + posts);
// 
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
