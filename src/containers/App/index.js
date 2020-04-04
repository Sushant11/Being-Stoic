import React, { Fragment } from "react";
import { withRouter,Switch, Route } from "react-router-dom";

import { AsyncHome, AsyncNotFound, AsyncQuote } from "./AsyncComponent";

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={AsyncHome}></Route>
      <Route exact path="/quote" component={AsyncQuote}></Route>
      <Route component={AsyncNotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(App);
