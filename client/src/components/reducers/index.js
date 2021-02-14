import { combineReducers } from "redux";
import postreducers from "./postsReducer";

export default combineReducers({
  post: postreducers,
});
