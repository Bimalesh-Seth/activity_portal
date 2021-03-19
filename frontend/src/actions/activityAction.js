import axios from "axios";
import {
  DELETE_ACTIVITY,
  GET_ACTIVITIES,
  GET_ACTIVITIES_CATEGORIES,
  GET_ACTIVITY,
  GET_ACTIVITY_CATEGORY,
  GET_ERROR,
} from "./types";

export const addActivity = (newActivity, history) => async (dispatch) => {
  try {
    await axios.post("/activityDetails", newActivity);
    history.push("/assignActivity");
    dispatch({
      type: GET_ERROR,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getActivities = () => async (dispatch) => {
  try {
    const res = await axios.get("/activityDetails/withDetails");
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getActivity = (id) => async dispatch => {
  try {
    const res = await axios.get(`/activityDetails/${id}`);
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    })
  }
}


export const assignActFact = (assActFact, history) => async (dispatch) => {
  try {
    await axios.post("/activityDetails/map", assActFact);
    history.push("/activityDashboard");
    dispatch({
      type: GET_ERROR,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getActCats = () => async (dispatch) => {
  try {
    const res = await axios.get("/activityDetails/withDetails");
    dispatch({
      type: GET_ACTIVITIES_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {}
};

export const getActCat = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/activityDetails/withDetails/${id}`);
    dispatch({
      type: GET_ACTIVITY_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteActivity = (id, history) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/activityDetails/${id}`);
      history.push("/activityDashboard");
      dispatch({
        type: DELETE_ACTIVITY,
        payload: id,
      });
    }
  } catch (error) {}
};
