import React from "react";
import { Card } from "antd";

const Stoic = (props) => {
  const { name, life, img } = props;

  return (
    <Card
      bordered={false}
      style={{ width: 250 }}
      className="card-attr animated fadeIn"
      hoverable
    >
      <img
        src={img}
        alt="Marcus"
        id="stoic-img"
        className="stoic-img animated fadeIn slow"
      ></img>

      <p className="stoic-name">{name}</p>

      <p className="stoic-date">{life}</p>
    </Card>
  );
};

export default Stoic;
