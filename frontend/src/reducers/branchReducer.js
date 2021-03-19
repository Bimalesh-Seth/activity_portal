import { GET_BRANCH, GET_BRANCHES, DELETE_BRANCH } from "../actions/types";

const initialState = {
  branch: {},
  branches: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BRANCH:
      return {
        ...state,
        branch: action.payload,
      };
    case GET_BRANCHES:
      return {
        ...state,
        branches: action.payload,
      };
    case DELETE_BRANCH:
      return {
        ...state,
        branches: state.branches.filter(
          (branch) => branch.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
