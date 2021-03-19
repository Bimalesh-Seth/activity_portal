import { GET_DEGREE, GET_DEGREES, DELETE_DEGREE } from "../actions/types";

const initialState = {
  degrees: [],
  degree: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DEGREE:
      return {
        ...state,
        degree: action.payload,
      };
    case GET_DEGREES:
      return {
        ...state,
        degrees: action.payload,
      };
    case DELETE_DEGREE:
      return {
        ...state,
        degrees: state.degrees.filter((degree) => degree.id !== action.payload),
      };
    default:
      return state;
  }
}
