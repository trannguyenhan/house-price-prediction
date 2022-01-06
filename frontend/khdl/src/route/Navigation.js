import { Route, Switch } from "react-router-dom";
import React from "react";
import PageNotFound from "../page/notfound/PageNotFound";
import Dashboard from "../page/dashboard/Dashboard";
import Predict from "../page/predict/Predict";

export default function Navigation() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/predict">
        <Predict />
      </Route>

      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}
