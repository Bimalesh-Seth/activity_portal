import {
  GET_ALLOTED_ACTIVITY,
  GET_PENDING_ENROLL_STUDENT,
  GET_ACTIVITY_DOCS
} from "../actions/types";

const initialState = {
  facultyActivityAlloted: {},
  pendingEnrollStudent: {},
  activityDocs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALLOTED_ACTIVITY:
      return {
        ...state,
        facultyActivityAlloted: action.payload,
      };
    case GET_PENDING_ENROLL_STUDENT:
      return {
        ...state,
        pendingEnrollStudent: action.payload,
      };
    case GET_ACTIVITY_DOCS:
      return{
        ...state,
        activityDocs : action.payload,
      }
    default:
      return state;
  }
}
