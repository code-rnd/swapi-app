import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import { SwContainer } from "./containers/sw/SwContainer";

import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <SwContainer />
  </Provider>,
  document.getElementById("root")
);
