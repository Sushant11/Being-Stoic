import React from "react";
import { Card } from "antd";

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
      <img src={MARCUS} alt="Marcus" className="stoic-img"></img>
      <p className='stoic-name'>MARCUS AURELIUS</p>
      <p className='stoic-date'>121-180 AD</p>
    </Card>
  );
};

export default Stoic;
