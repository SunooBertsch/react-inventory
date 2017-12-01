import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxFormReducer } from "redux-form";
import formReducer from "./formReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  form2: formReducer
});
