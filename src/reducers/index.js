import { combineReducers } from "redux";
import postReducer from "./posts";
import userReducer from "./user";

export default combineReducers({
  posts: postReducer,
  user: userReducer,
});
