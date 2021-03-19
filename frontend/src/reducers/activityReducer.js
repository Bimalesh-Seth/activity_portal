import {
  DELETE_ACTIVITY,
  GET_ACTIVITIES,
  GET_ACTIVITIES_CATEGORIES,
  GET_ACTIVITY,
  GET_ACTIVITY_CATEGORY,
} from "../actions/types";

const initialState = {
  activities: [],
  activitiesCategories: [],
  activity: {},
  activityCategory: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_ACTIVITIES_CATEGORIES:
      return {
        ...state,
        activitiesCategories: action.payload,
      };
    case GET_ACTIVITY_CATEGORY:
      return {
        ...state,
        activityCategory: action.payload,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
