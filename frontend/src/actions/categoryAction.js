//import {} from "../actions/types";

import axios from "axios";
import { GET_CATEGORIES, GET_ERROR } from "./types";

export const addCategory = (newCategory, history) => async (dispatch) => {
  try {
    await axios.post("/category", newCategory);
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

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/category");
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
