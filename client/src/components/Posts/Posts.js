import React, { useEffect } from "react";
import useStyles from "./styles";
import { connect } from "react-redux";
import Post from "../Post/Post";

function Posts(props) {
  const classes = useStyles();


  return (
    <div>
      <Post />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("the state from post ", state);
  return state;
};
export default connect(mapStateToProps)(Posts);
