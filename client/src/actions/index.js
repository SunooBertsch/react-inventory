import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleForm = data => async dispatch => {
  const res = await axios.post("/cars");
  dispatch({
    type: HANDLE_FORM,
    payload: res.data
  });
};
