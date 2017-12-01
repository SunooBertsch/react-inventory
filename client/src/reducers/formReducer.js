import { HANDLE_FORM } from "../actions/index";

export default function formData(state = null, action) {
  switch (action.type) {
    case HANDLE_FORM:
      return {
        ...state,
        form: action.payload
      };
    default:
      return state;
  }
}
