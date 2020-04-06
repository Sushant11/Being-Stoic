import React, { Fragment } from "react";
import { Avatar, Row, Col } from "antd";

const Info = (props) => {
  const { stoics, match } = props;
  let data;
  switch (match.path) {
    case "/quotes/zeno":
      data = stoics.stoics[0];
      break;
    case "/quotes/clenthes":
      data = stoics.stoics[1];
      break;
    case "/quotes/chrysippus":
      data = stoics.stoics[2];
      break;
    case "/quotes/seneca":
      data = stoics.stoics[3];
      break;
    case "/quotes/epictus":
      data = stoics.stoics[4];
      break;
    case "/quotes/marcus":
      data = stoics.stoics[5];
      break;
    default:
      alert("No Data");
  }
  return (
    <Fragment>
      <Row className="detail-margin">
        <Col
          xs={{ span: 6, offset: 0 }}
          sm={{ span: 3, offset: 0 }}
          md={{ span: 2,offset: 0 }}
          lg={{ span: 2, offset: 0 }}
          xl={{ span: 2, offset: 0 }}
          xxl={{ span: 2, offset: 0 }}
          className="padding-avatar animated fadeIn slow"
        >
          <Avatar src={data.src} size={48} />
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 14 }}
          md={{ span: 10 }}
          lg={{ span: 10 }}
          xl={{ span: 10 }}
          xxl={{ span: 10 }}
          className="info-detail"
        >
          <Row>
            <Col span={24} className="info-name">
              {data.name}
            </Col>
            <Col span={24} className="info-date">
              {data.life}
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Info;
