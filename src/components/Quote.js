import React, { Fragment } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

import Navbar from "./items/Navbar";

import "../styles/App.css";

const { Header } = Layout;

const Quote = (props) => {
  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>
    </Fragment>
  );
};

export default withRouter(Quote);
