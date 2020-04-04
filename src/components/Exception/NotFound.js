import React from "react";
import { Result, Button } from "antd";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Looks like the gods are angry, the page you visited does not exist."
      extra={
        <a href="/">
          <Button type="primary">Go Home</Button>
        </a>
      }
    />
  );
};

export default NotFound;
