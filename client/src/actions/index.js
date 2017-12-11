import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";
export const GET_INVENTORY = "get_inventory";

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
  const res = await axios
    .post("/cars", data)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err);
    });
  dispatch({
    type: HANDLE_FORM,
    payload: res.data
  });
};

export const getInventory = () => async dispatch => {
  const res = await axios.get("/cars");
  console.log(res);
  dispatch({
    type: GET_INVENTORY,
    payload: res.data
  });
};
