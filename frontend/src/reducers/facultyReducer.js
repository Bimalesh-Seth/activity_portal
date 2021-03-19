import {
  GET_FACULTY,
  GET_FACULTIES,
  DELETE_FACULTY,
  GET_ALLOTED_ACTIVITY,
  GET_VERIFIED_FACULTY,
  GET_UNVERIFIED_FACULTY,
} from "../actions/types";

const initialState = {
  faculty: {},
  faculties: [],
  facultyActivityAlloted: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FACULTY:
      return {
        ...state,
        faculty: action.payload,
      };
    case GET_FACULTIES:
      return {
        ...state,
        faculties: action.payload,
      };
    case DELETE_FACULTY:
      return {
        ...state,
        faculties: state.faculties.filter(
          (faculty) => faculty.id !== action.payload
        ),
      };
    case GET_ALLOTED_ACTIVITY:
      return {
        ...state,
        facultyActivityAlloted: action.payload,
      };
    case GET_VERIFIED_FACULTY:
      return{
        ...state,
        faculties: action.payload,
      };
    case GET_UNVERIFIED_FACULTY:
      return{
        ...state,
        faculties: action.payload,
      };
    default:
      return state;
  }
}
