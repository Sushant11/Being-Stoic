import React from "react";
import { Card } from "antd";

import MARCUS from "../../images/marcus.svg";

// const { Meta } = Card;

const Stoic = (props) => {
  const { name, life } = props;
  return (
    <Card
      bordered={false}
      style={{ width: 250 }}
      className="card-attr"
      hoverable
    >
      <img src={MARCUS} alt="Marcus" id="stoic-img" className="stoic-img"></img>

      <p className="stoic-name">{name}</p>

      <p className="stoic-date">{life}</p>
    </Card>
  );
};

export default Stoic;
