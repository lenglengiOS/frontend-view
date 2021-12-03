/**
 * 路由配置
 * */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import UseContext from "./useContext";

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/UseContext" component={UseContext} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Root;
