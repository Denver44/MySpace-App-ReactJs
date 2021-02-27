import React from "react";
import { AppBar, Typography, Button, Toolbar, Avatar } from "@material-ui/core";
import Logo from "../../images/logo3.png";
import { useStyles } from "./styles.js";
import { Link } from "react-router-dom";

function Navbar() {
  const classes = useStyles();
  const user = null;

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <img src={Logo} alt="myspace" height="45" />
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h3"
            align="center"
          >
            Myspace
          </Typography>
        </div>
        <Toolbar>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
