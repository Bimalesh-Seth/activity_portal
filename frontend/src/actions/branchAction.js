import axios from "axios";
import { GET_BRANCHES, GET_ERROR, DELETE_BRANCH } from "./types";

export const addBranch = (newBranch, history) => async (dispatch) => {
  try {
    console.log(newBranch);
    await axios.post("/branch", newBranch);
    //history.push("/branchDashboard");
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

export const getBranches = () => async (dispatch) => {
  try {
    const res = await axios.get("/branch");
    dispatch({
      type: GET_BRANCHES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteBranch = (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        "Are you sure? This will delete all the data related to it"
      )
    ) {
      await axios.delete(`/branch/${id}`);
      dispatch({
        type: DELETE_BRANCH,
        payload: id,
      });
    }
  } catch (error) {}
};
