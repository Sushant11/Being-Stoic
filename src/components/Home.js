import React, { Fragment } from "react";
import { Row, Col, Layout } from "antd";

import Navbar from "./items/Navbar";

import "../styles/App.css";
import Stoic from "./items/Stoic";

const { Header, Content } = Layout;

const Home = () => {
  return (
    <Fragment>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 14, offset: 4 }}
            xl={{ span: 18, offset: 3 }}
            xxl={{ span: 12, offset: 6 }}
          >
            <Row>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8}}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8}}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
              <Col
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 8 }}
                xl={{ span: 8 }}
                xxl={{ span: 8 }}
              >
                <Stoic />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Fragment>
  );
};

export default Home;
