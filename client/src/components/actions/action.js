import axios from "../api/axios";

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};
