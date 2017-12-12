import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";
export const GET_INVENTORY = "get_inventory";
export const DELETE_INVENTORY = "delete_inventory";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleForm = data => async dispatch => {
  const res = await axios.post("/cars", data);
  dispatch({
    type: HANDLE_FORM,
    payload: res.data
  });
};

export const getInventory = () => async dispatch => {
  const res = await axios.get("/cars");
  dispatch({
    type: GET_INVENTORY,
    payload: res.data
  });
};

export const deleteInventory = id => async dispatch => {
  console.log(id);
  const data = { _id: id };
  const res = await axios.post("/cars/deleteInventory", data);
  console.log("res", res);
  dispatch({
    type: DELETE_INVENTORY,
    payload: res.data
  });
};
