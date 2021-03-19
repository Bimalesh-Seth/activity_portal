import { GET_ERROR } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
