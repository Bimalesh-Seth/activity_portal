import axios from "axios";
import { GET_ERROR, GET_SEMESTERS } from "./types";

export const getSemesters = () => async (dispatch) => {
  try {
    const res = await axios.get("/semester");
    dispatch({
      type: GET_SEMESTERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
