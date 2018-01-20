import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";
export const GET_INVENTORY = "get_inventory";
export const DELETE_INVENTORY = "delete_inventory";
export const SOLD_INVENTORY = "delete_inventory";
export const LOAD_EXISTING = "load_existing";
export const HANDLE_LOAN_FORM = "handle_loan_form";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleForm = data => async dispatch => {
  const dataToSend = { ...data, sold: false };
  const res = await axios.post("/cars", dataToSend);
  window.location.reload();
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
  const data = { _id: id };
  const res = await axios.post("/cars/deleteInventory", data);
  window.location.reload();
  dispatch({
    type: DELETE_INVENTORY,
    payload: res.data
  });
};

export const soldInventory = id => async dispatch => {
  const data = { _id: id };
  const res = await axios.post("/cars/soldInventory", data);
  window.location.reload();
  dispatch({
    type: SOLD_INVENTORY,
    payload: res.data
  });
};

export const loadExistingBuild = id => async dispatch => {
  const res = await axios.post("/cars/", id);
  dispatch({
    type: LOAD_EXISTING,
    payload: res.data
  });
};

export const handleLoanForm = data => async dispatch => {
  const res = await axios.post("/loan", data);
  dispatch({
    type: HANDLE_LOAN_FORM,
    payload: res.data
  });
};
