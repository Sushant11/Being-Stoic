import React from "react";
import { Layout } from "antd";

import Navbar from "./items/Navbar";

import "../styles/App.css";

const { Header } = Layout;

const Quote = () => {
  return (
    <Header>
      <Navbar/>
    </Header>
  );
};

export default Quote;
