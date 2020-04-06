import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Quote from "../../components/Quote";

const index = ({ match }) => {
  return (
    <Fragment>
      <Switch>
        <Route component={Quote} path={`${match.url}`}></Route>
      </Switch>
    </Fragment>
  );
};

export default index;
