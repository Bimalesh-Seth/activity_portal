import {
  DELETE_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  GET_ENROLL_STATUS,
  DELETE_ENROLL,
  GET_UNVERIFIED_STUDENT,
  GET_VERIFIED_STUDENT,
} from "../actions/types";

const initialState = {
  students: [],
  student: {},
  enrollStatus: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case GET_UNVERIFIED_STUDENT:
      return{
        ...state,
        students: action.payload,
      }
    case GET_VERIFIED_STUDENT:
      return{
        ...state,
        students: action.payload,
      }
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case GET_ENROLL_STATUS:
      return {
        ...state,
        enrollStatus: action.payload,
      };
    case DELETE_ENROLL:
      return {
        ...state,
        enrollStatus: state.enrollStatus.filter(
          (enroll) => enroll.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
