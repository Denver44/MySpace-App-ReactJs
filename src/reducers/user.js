import { TYPES_FOR_USERS } from "../actions/types";

const INITIAL_STATE = null;

const userReducer = (state = { authData: INITIAL_STATE }, action) => {
  switch (action.type) {
    case TYPES_FOR_USERS.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case TYPES_FOR_USERS.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default userReducer;
