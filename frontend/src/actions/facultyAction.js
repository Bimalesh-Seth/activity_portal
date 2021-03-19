import axios from "axios";
import { DELETE_FACULTY, GET_ERROR, GET_FACULTIES, GET_FACULTY, GET_UNVERIFIED_FACULTY, GET_VERIFIED_FACULTY } from "./types";

/* Add Faculty */
export const addFaculty = (faculty, history) => async (dispatch) => {
  try {
    console.log(faculty);
    await axios.post("/faculty", faculty);
    history.push("/facultyDashboard");
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

/* Get Faculty */
export const getFaculty = (id, history) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.get(`/faculty/${id}`);

    dispatch({
      type: GET_FACULTY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

/* Get All Faculties */
export const getFaculties = () => async (dispatch) => {
  try {
    const res = await axios.get("/faculty/withDetails");
    dispatch({
      type: GET_FACULTIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

/* Update Faculty */
export const updateFaculty = (id, updatedFaculty, history) => async (
  dispatch
) => {
  try {
    await axios.put(`/faculty/${id}`, updatedFaculty);
    history.push("/facultyDashboard");
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

/* Delete a Faculty */
export const deleteFaculty = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/faculty/${id}`);
      dispatch({
        type: DELETE_FACULTY,
        payload: id,
      });
    }
  } catch (err) { }
};

export const getVerifiedFaculties = (verifiedStatus) => async dispatch => {
  try {
    const res = await axios.post("/faculty/verify", verifiedStatus);
    console.log(res.data);
    dispatch({
      type: GET_VERIFIED_FACULTY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    })
  }
}

export const getUnverifiedFaculties = (unverifiedStatus) => async dispatch => {
  try {
    const res = await axios.post("/faculty/verify", unverifiedStatus);
    dispatch({
      type: GET_UNVERIFIED_FACULTY,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    })
  }
}

export const verifyFaculty = (id, history) => async dispatch => {
  try {
    await axios.put(`faculty/verify/${id}`);
    dispatch({
      type: GET_ERROR,
      payload: {},
    });
    history.push("/facultyDashboard");
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
}