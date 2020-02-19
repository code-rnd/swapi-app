import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import { SwContainer } from "./containers/sw/SwContainer";
import { WidjetContainer } from "./containers/sw/WidjetContainer";

import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <WidjetContainer />
  </Provider>,
  document.getElementById("root")
);
