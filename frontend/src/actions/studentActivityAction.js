import axios from "axios";
import { DELETE_ENROLL, GET_ENROLL_STATUS, GET_ERROR } from "./types";

export const enrollActivity = (enrollApplication, history) => async (
  dispatch
) => {
  try {
    await axios.post("/student/createActivity", enrollApplication);
    history.push("/studentActivityStatus");
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

export const getEnrollActivitiesStatus = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/student/activity/status`);
    dispatch({
      type: GET_ENROLL_STATUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteEnrollActivity = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    )
      await axios.delete(`/student/activity/delete/${id}`);
    dispatch({
      type: DELETE_ENROLL,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
