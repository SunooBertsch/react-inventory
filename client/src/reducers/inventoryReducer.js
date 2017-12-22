import { GET_INVENTORY, DELETE_INVENTORY, LOAD_EXISTING } from "../actions";

export default function(state = { inventory: [] }, action) {
  switch (action.type) {
    case DELETE_INVENTORY:
      return {
        inventory: action.payload
      };
    case GET_INVENTORY:
      return {
        inventory: action.payload
      };
    case LOAD_EXISTING:
      return {
        currentBuild: action.payload
      };
    default:
      return state;
  }
}
