import React, { Fragment } from "react";
import { Row, Col, Layout } from "antd";

import { Link, withRouter } from "react-router-dom";

import Navbar from "./items/Navbar";

import "../styles/App.css";
import Stoic from "./items/Stoic";

import ReactGA from 'react-ga';

const initializeReactGA = () => {
  ReactGA.initialize('UA-162898252-1');
  ReactGA.pageview('/');
}

const { Header, Content, Footer } = Layout;

const Home = (props) => {
  const { stoics } = props;
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
            lg={{ span: 14, offset: 4 }}
            xl={{ span: 18, offset: 3 }}
            xxl={{ span: 12, offset: 6 }}
          >
            <Row>
              {stoics.map((stoic) => {
                return (
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    md={{ span: 8 }}
                    xl={{ span: 8 }}
                    xxl={{ span: 8 }}
                    key={stoic.id}
                  >
                    <Link to={`/quotes/${stoic.id}`}>
                      <Stoic
                        name={stoic.name}
                        life={stoic.life}
                        img={stoic.src}
                      />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer>
        <span>© Being Stoic 2020</span>
      </Footer>
    </Fragment>
  );
};

export default withRouter(Home);
