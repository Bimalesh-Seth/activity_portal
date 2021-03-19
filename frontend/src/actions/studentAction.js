import axios from "axios";
import { DELETE_STUDENT, GET_ERROR, GET_STUDENT, GET_STUDENTS, GET_UNVERIFIED_STUDENT, GET_VERIFIED_STUDENT } from "./types";

export const addStudent = (newStudent, history) => async (dispatch) => {
  try {
    await axios.post("/student", newStudent);
    history.push("/studentDashboard");
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

export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get("/student/withDetails");
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const getStudent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/student/${id}`);
    dispatch({
      type: GET_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const updateStudent = (updateStudent, id, history) => async (
  dispatch
) => {
  try {
    await axios.put(`/student/${id}`, updateStudent);
    history.push("/studentDashboard");
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

export const deleteStudent = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/student/${id}`);
      dispatch({
        type: DELETE_STUDENT,
        payload: id,
      });
    }
  } catch (err) {}
};

export const getUnverifiedStudents = (unverifiedStatus) => async dispatch => {
  try {
    const res = await axios.post("/student/verify", unverifiedStatus);
    dispatch({
      type:GET_UNVERIFIED_STUDENT,
      payload:res.data,
    })
  } catch (err) {
    dispatch({
      type:GET_ERROR,
      payload:err.response.data,
    })
  }
}

export const getVerifiedStudents = (verifiedStatus) => async dispatch => {
  try {
    const res = await axios.post("/student/verify", verifiedStatus);
    dispatch({
      type:GET_VERIFIED_STUDENT,
      payload:res.data,
    })
  } catch (err) {
    dispatch({
      type:GET_ERROR,
      payload:err.response.data,
    })
  }
}

export const verifyStudent = (id, history) => async dispatch => {
  try {
    await axios.put(`student/verify/${id}`);
    dispatch({
      type:GET_ERROR,
      payload:{},
    });
    history.push("/studentDashboard");
  } catch (err) {
    dispatch({
      type:GET_ERROR,
      payload:err.response.data,
    });
  }
}