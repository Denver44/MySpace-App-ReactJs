import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { fetchPost } from "./actions/action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "./images/logo3.png";
import { useStyles } from "./styles/style";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(fetchPost());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Myspace
        </Typography>
        <img src={Logo} alt="myspace" height="50" />
      </AppBar>

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
    </Container>
  );
}

export default App;
