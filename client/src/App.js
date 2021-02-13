import "./style.js";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPost } from "./action";
import { savePosts, loadPosts } from "./postsReducer";

function App() {
  const imglink =
    "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png";
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.heading}
          src={imglink}
          alt="memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItem="strech"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
