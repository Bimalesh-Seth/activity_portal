import { GET_CATEGORY, GET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [],
  category: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
