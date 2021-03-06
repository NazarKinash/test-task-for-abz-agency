import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import globalState from "./redux/store";

import "./index.scss";
import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
