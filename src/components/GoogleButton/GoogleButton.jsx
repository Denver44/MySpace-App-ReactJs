import React from "react";
import { Button } from "@material-ui/core";
import Icon from "../../images/Icon.js";
import { auth, provider } from "../../firebase.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleSignIn } from "../../actions/user.js";

function GoogleButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const userInfo = {
          imageUrl: res.user.photoURL,
          email: res.user.email,
          name: res.user.displayName,
          googleId: res.user.uid,
        };
        const token = res.user.uid;
        dispatch(GoogleSignIn({ data: { userInfo, token } }));
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Button
        mt={2}
        color="secondary"
        onClick={signInWithGoogle}
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
