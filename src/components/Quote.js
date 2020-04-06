import React, { Fragment } from "react";
import { Layout, Row, Col } from "antd";
import { withRouter } from "react-router-dom";

import Navbar from "./items/Navbar";
import Info from "./items/Info";

import "../styles/App.css";

import stoics from "../db/stoics";
import quotes from "../db/quotes";
import QuoteCard from "./items/QuoteCard";

import ReactGA from "react-ga";

const initializeReactGA = () => {
  ReactGA.initialize("UA-162898252-1");
  ReactGA.pageview("/quotes/:id");
};

const { Header, Content, Footer } = Layout;
const Quote = (props) => {
  initializeReactGA();
  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
            xxl={{ span: 12, offset: 6 }}
          >
            <Info {...props} stoics={stoics} />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
            xxl={{ span: 12, offset: 6 }}
          >
            <QuoteCard {...props} quotes={quotes} />
          </Col>
        </Row>
      </Content>
      <Footer>
        <span>© Being Stoic 2020</span>
      </Footer>
    </Fragment>
  );
};

export default withRouter(Quote);
