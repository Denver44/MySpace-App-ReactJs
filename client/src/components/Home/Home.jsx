import { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import { fetchPost } from "../../actions/action.js";
import { useDispatch } from "react-redux";
import { useStyles } from "./style";

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPost());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      {/* Grow it just provide an Animation */}
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={7} lg={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={5} lg={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
