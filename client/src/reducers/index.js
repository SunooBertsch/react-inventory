import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxFormReducer } from "redux-form";
import formReducer from "./formReducer";
import inventoryReducer from "./inventoryReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  form2: formReducer,
  inventory: inventoryReducer,
  loanForm: formReducer
});
