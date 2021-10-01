import axios from "../api/axios";
import { TYPES_FOR_USERS } from "./types";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/signIn", formData);
    dispatch({
      type: TYPES_FOR_USERS.AUTH,
      data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/signUp", formData);
    dispatch({ type: TYPES_FOR_USERS.AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const GoogleSignIn = ({ data }) => {
  return { type: TYPES_FOR_USERS.GOOGLE_LOGIN, data };
};

export const signOut = () => {
  return { type: TYPES_FOR_USERS.LOGOUT };
};
