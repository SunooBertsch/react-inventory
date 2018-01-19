import { HANDLE_FORM, HANDLE_LOAN_FORM } from "../actions/index";

export default function formData(state = null, action) {
  switch (action.type) {
    case HANDLE_FORM:
      return {
        ...state,
        form: action.payload
      };
    case HANDLE_LOAN_FORM:
      return {
        ...state,
        loanForm: action.payload
      };
    default:
      return state;
  }
}
