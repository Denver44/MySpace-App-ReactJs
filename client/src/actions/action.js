import axios from "../api/axios";

export const fetchPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/posts");
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await axios.post("/posts", newPost);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
