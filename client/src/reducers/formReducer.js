import {
  HANDLE_FORM,
  HANDLE_LOAN_FORM,
  HANDLE_LOAN_FORM_SHORT
} from "../actions/index";

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
    case HANDLE_LOAN_FORM_SHORT:
      return {
        ...state,
        loanShort: action.payload
      };
    default:
      return state;
  }
}
