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

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}`, updatedPost);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}/LikePost`);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
