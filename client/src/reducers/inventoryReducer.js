import {
  GET_INVENTORY,
  DELETE_INVENTORY,
  LOAD_EXISTING,
  SOLD_INVENTORY,
  GET_AUCTION_INVENTORY,
  DELETE_AUCTION_INVENTORY,
  SOLD_AUCTION_INVENTORY
} from "../actions";

export default function(
  state = { inventory: [], auctionInventory: [] },
  action
) {
  switch (action.type) {
    case DELETE_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    case DELETE_AUCTION_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    case GET_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    case LOAD_EXISTING:
      return {
        ...state,
        currentBuild: action.payload
      };
    case SOLD_INVENTORY:
      return {
        ...state,
        inventory: action.payload
      };
    case SOLD_AUCTION_INVENTORY:
      return {
        ...state,
        auctionInventory: action.payload
      };
    case GET_AUCTION_INVENTORY:
      return {
        ...state,
        auctionInventory: action.payload
      };
    default:
      return state;
  }
}
