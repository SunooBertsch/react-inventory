import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  console.log("res", res);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleForm = data => async dispatch => {
  console.log("data", data);
  const res = await axios.post("/cars", data);

  dispatch({
    type: HANDLE_FORM,
    payload: res.data
  });
};
