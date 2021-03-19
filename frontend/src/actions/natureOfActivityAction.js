import axios from "axios";
import { GET_ERROR, GET_NOAS } from "./types";

export const getNatureOfActivities = () => async dispatch => {
    try {
        const res = await axios.get("/natureOfActivity");
        dispatch({
            type:GET_NOAS,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: GET_ERROR,
            payload: err.response.data,
        })
    }
}