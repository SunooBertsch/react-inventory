import createHistory from "history/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers";

export const history = createHistory();

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
