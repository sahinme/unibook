import * as React from "react";
import utils from "src/utils/utils";
import { Switch, Route } from "react-router";

const Router = () => {
  const Applayout = utils.getRoute("/").component;

  return (
    <Switch>
      <Route path="/" render={(props: any) => <Applayout {...props} exact />} />
    </Switch>
  );
};

export default Router;
