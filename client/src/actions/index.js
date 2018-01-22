import axios from "axios";

export const FETCH_USER = "fetch_user";
export const HANDLE_FORM = "handle_form";
export const GET_INVENTORY = "get_inventory";
export const DELETE_INVENTORY = "delete_inventory";
export const SOLD_INVENTORY = "delete_inventory";
export const LOAD_EXISTING = "load_existing";
export const HANDLE_LOAN_FORM = "handle_loan_form";
export const GET_AUCTION_INVENTORY = "get_auction_inventory";
export const DELETE_AUCTION_INVENTORY = "delete_auction_inventory";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleForm = data => async dispatch => {
  const dataToSend = { ...data, sold: false };
  console.log("DATA TO SEND", dataToSend);
  if (!dataToSend.auction) {
    const res = await axios.post("/cars", dataToSend);
    console.log("sale sent");
    window.location.reload();
    dispatch({
      type: HANDLE_FORM,
      payload: res.data
    });
  } else {
    const res = await axios.post("/cars/auction", dataToSend);
    console.log("auction sent");
    window.location.reload();
    dispatch({
      type: HANDLE_FORM,
      payload: res.data
    });
  }
};

export const getInventory = () => async dispatch => {
  const res = await axios.get("/cars");
  dispatch({
    type: GET_INVENTORY,
    payload: res.data
  });
};

export const getAuctionInventory = () => async dispatch => {
  const res = await axios.get("/cars/auction");
  dispatch({
    type: GET_AUCTION_INVENTORY,
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

export const deleteAuctionInventory = id => async dispatch => {
  const data = { _id: id };
  const res = await axios.post("/cars/deleteAuctionInventory", data);
  window.location.reload();
  dispatch({
    type: DELETE_AUCTION_INVENTORY,
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
