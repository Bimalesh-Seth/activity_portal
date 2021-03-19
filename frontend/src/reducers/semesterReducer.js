import { GET_SEMESTERS } from "../actions/types";

const initialState = {
  semesters: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEMESTERS:
      return {
        ...state,
        semesters: action.payload,
      };
    default:
      return state;
  }
}
