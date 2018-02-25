import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";
import "./globalStyle";
import Main from "containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
