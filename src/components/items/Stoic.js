import React from "react";
import { Card } from "antd";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import MARCUS from "../../images/marcus.svg";

// const { Meta } = Card;

const Stoic = () => {
  return (
    <Card
      bordered={false}
      style={{ width: 250 }}
      className="card-attr"
      hoverable
    >
      {MARCUS ? (
        <img src={MARCUS} alt="Marcus" className="stoic-img"></img>
      ) : (
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 20, color: "black" }} spin />
          }
        />
      )}

      <p className="stoic-name">MARCUS AURELIUS</p>
      <p className="stoic-date">121-180 AD</p>
    </Card>
  );
};

export default Stoic;
