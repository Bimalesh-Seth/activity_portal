import { GET_NOAS } from "../actions/types";

const initialState = {
  natureOfActivity: {},
  natureOfActivities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOAS:
      return {
        ...state,
        natureOfActivities: action.payload,
      };


    default:
      return state;
  }
}
