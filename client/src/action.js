export const CREATE_POST = "CREATE_POST";
export const SET_POSTS = "SET_POSTS";

export const addPost = (posts) => ({
  type: CREATE_POST,
  payload: posts,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
