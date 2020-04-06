import React, { Fragment } from "react";
import { Button, Typography, Row, Col, Tooltip } from "antd";
import { FireOutlined, HomeOutlined, FilterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Navbar = () => {
  return (
    <Fragment>
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 12, offset: 4 }}
          xl={{ span: 12, offset: 4 }}
          xxl={{ span: 12, offset: 6 }}
        >
          <Title className="being-stoic">Being Stoic</Title>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 18 }}
          lg={{ span: 12, offset: 4 }}
          xl={{ span: 12, offset: 4 }}
          xxl={{ span: 8, offset: 6 }}
        >
          <Title level={4} className="sub-heading">
            CURATED QUOTES FROM FAMOUS STOIC PHILOSHOPERS.
          </Title>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 4 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          xl={{ span: 4 }}
          xxl={{ span: 4 }}
          className="icons"
        >
          <Tooltip title="Toggle Night Mode">
            <span className="fire float-icon">
              <Button shape="circle" icon={<FireOutlined />} size="default" />{" "}
            </span>
          </Tooltip>
          {/* <Tooltip title="Filter">
            <Button
              shape="circle"
              className="float-icon"
              icon={<FilterOutlined />}
              size="default"
            />
          </Tooltip> */}
          <Link to="/">
            <Tooltip title="Home">
              <Button
                className="float-icon"
                shape="circle"
                icon={<HomeOutlined />}
                size="default"
              />
            </Tooltip>
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Navbar;
