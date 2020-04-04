import React, { Fragment } from "react";
import { Button, Typography, Row, Col } from "antd";
import { FireOutlined, HomeOutlined, FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Navbar = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 4 }} xl={{ span: 12, offset: 6 }}>
          <Title className="being-stoic">Being Stoic</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24}} sm={{ span: 18}} md={{ span: 16}} lg={{ span: 12, offset: 4 }}xl={{ span: 8, offset: 6 }}>
          <Title level={4} className="sub-heading">
            QUOTES FROM FAMOUS STOIC PHILOSHOPERS.
          </Title>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 4 }} xl={{ span: 4 }} className="icons">
          <span className="fire float-icon">
            <Button shape="circle" icon={<FireOutlined />} size="default" />{" "}
          </span>

          {/* <Button
            type="primary"
            shape="circle"
            icon={<HomeOutlined />}
            size='small'
          /> */}
          <Button shape="circle" className='float-icon' icon={<FilterOutlined />} size="default" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Navbar;
