import { TYPES_FOR_POST } from "../actions/types";

const INITIAL_STATE = [];

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES_FOR_POST.FETCH_ALL:
      return action.payload;
    case TYPES_FOR_POST.CREATE:
      return [...state, action.payload];
    case TYPES_FOR_POST.UPDATE:
    case TYPES_FOR_POST.LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case TYPES_FOR_POST.DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default postReducer;
