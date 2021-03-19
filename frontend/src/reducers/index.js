import { combineReducers } from "redux";
import facultyReducer from "./facultyReducer";
import branchReducer from "./branchReducer";
import errorReducer from "./errorReducer";
import degreeReducer from "./degreeReducer";
import studentReducer from "./studentReducer";
import categoryReducer from "./categoryReducer";
import activityReducer from "./activityReducer";
import semesterReducer from "./semesterReducer";
import facultyOperationReducer from "./facultyOperationReducer";
import securityReducer from "./securityReducer";
import natureOfActivityReducer from "./natureOfActivityReducer";

/* Combining all reducers */
export default combineReducers({
  faculty: facultyReducer,
  facultyOperation: facultyOperationReducer,
  branch: branchReducer,
  degree: degreeReducer,
  semester: semesterReducer,
  student: studentReducer,
  category: categoryReducer,
  activity: activityReducer,
  error: errorReducer,
  security: securityReducer,
  nature: natureOfActivityReducer,
});
