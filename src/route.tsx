/**
 * 路由配置
 * */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import UseContext from "./useContext";
import UseReducer from "./useReducer";
import UseMemo from "./useMemo";

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/UseContext" component={UseContext} />
    <Route path="/UseReducer" component={UseReducer} />
    <Route path="/UseMemo" component={UseMemo} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Root;
