import { CREATE_POST, setPosts, SET_POSTS } from "./action";

const initialState = {
  list: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST: {
      return { ...state, list: [...state.list, action.payload] };
    }
    case SET_POSTS: {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
};

export const savePosts = () => async (dispatch, getState) => {
  const posts = getState().notes;
  await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(posts),
  });
  alert("Success");
};

export const loadPosts = () => async (dispatch, getState) => {
  const posts = await fetch("http://localhost:5000/posts").then((res) =>
    res.json()
  );
  dispatch(setPosts(posts));
};
