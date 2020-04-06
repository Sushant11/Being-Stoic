import React, { Fragment } from "react";
import { Card } from "antd";

const QuoteCard = (props) => {
  const { quotes, match } = props;
  console.log("props :", quotes.marcus);
  let data;
  console.log("data :", data);
  switch (match.path) {
    case "/quotes/zeno":
      data = quotes.zeno;
      break;
    case "/quotes/clenthes":
      data = quotes.clenthes;
      break;
    case "/quotes/chrysippus":
      data = quotes.chrysippus;
      break;
    case "/quotes/seneca":
      data = quotes.seneca;
      break;
    case "/quotes/epictus":
      data = quotes.epictus;
      break;
    case "/quotes/marcus":
      data = quotes.marcus;
      break;
    default:
      alert("No Data");
  }

  return (
    <Fragment>
      {data.map((quote, index) => (
        <Card className="card-attr-quote animated fadeIn" key={index}>
          {quote}
        </Card>
      ))}
    </Fragment>
  );
};

export default QuoteCard;
