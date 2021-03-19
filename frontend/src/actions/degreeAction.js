import axios from "axios";
import { DELETE_DEGREE, GET_DEGREES, GET_ERROR } from "./types";

export const addDegree = (newDegree) => async (dispatch) => {
  try {
    await axios.post("/degree", newDegree);
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

export const getDegrees = () => async (dispatch) => {
  try {
    const res = await axios.get("/degree");
    dispatch({
      type: GET_DEGREES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteDegree = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/degree/${id}`);
      dispatch({
        type: DELETE_DEGREE,
        payload: id,
      });
    }
  } catch (err) {}
};
