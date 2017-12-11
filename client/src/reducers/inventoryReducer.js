import { GET_INVENTORY } from "../actions";

export default function(state = { inventory: [] }, action) {
  switch (action.type) {
    case GET_INVENTORY:
      console.log(action.payload);
      return {
        inventory: action.payload
      };
    default:
      return state;
  }
}
