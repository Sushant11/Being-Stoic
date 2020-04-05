import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./styles/index.css";
import "antd/dist/antd.css";
import App from "./containers/App";
import history from "./utils/history";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Suspense
    fallback={
      <div className="loader-container">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
          }
        />
        <div>Thinking ...</div>
      </div>
    }
  >
    <Router history={history}>
      <App />
    </Router>
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
