import axios from "../api/axios";
import { TYPES_FOR_POST } from "./types";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    let ValidateProfileData = JSON.parse(localStorage.getItem("profile")).token;
    req.headers.Authorization = `Bearer ${ValidateProfileData}`;
  }
  return req;
});

export const fetchPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/posts");
    dispatch({ type: TYPES_FOR_POST.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await axios.post("/posts", newPost);
    dispatch({ type: TYPES_FOR_POST.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}`, updatedPost);
    dispatch({ type: TYPES_FOR_POST.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${id}`);
    dispatch({ type: TYPES_FOR_POST.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/posts/${id}/LikePost`);
    dispatch({ type: TYPES_FOR_POST.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
