import React from "react";
import { Button } from "@material-ui/core";
import Icon from "../../images/Icon.js";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { GoogleSignIn } from "../../actions/user.js";

function GoogleButton() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  return (
    <div>
      <Button
        mt={2}
        color="secondary"
        onClick={() => null}
        startIcon={<Icon />}
        variant="contained"
        fullWidth
      >
        Google Sign In
      </Button>
    </div>
  );
}

export default GoogleButton;
