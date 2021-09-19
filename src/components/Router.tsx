import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import { Switch, Route, withRouter } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default withRouter(Router);
