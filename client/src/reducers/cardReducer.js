import { FETCH_ID } from "../actions";

export default function(state = { card: "" }, action) {
  switch (action.type) {
    case FETCH_ID:
      return {
        ...state,
        cardId: action.payload
      };
    default:
      return state;
  }
}
