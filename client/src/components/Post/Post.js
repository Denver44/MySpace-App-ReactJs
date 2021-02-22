import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useStyles } from "./style";
import { deletePost, likePost } from "../../actions/action";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={(e) => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="subtitle2" color="textSecondary">
          {post.tags.map((tag) => `#` + tag + " ")}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message.length > 50
            ? post.message.substr(0, 180) + "..."
            : post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          <Typography variant="body2" className={classes.buttons}>
            Like <span>{post.likeCount}</span>
          </Typography>
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />{" "}
          <Typography variant="body2" className={classes.buttons}>
            Delete
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
