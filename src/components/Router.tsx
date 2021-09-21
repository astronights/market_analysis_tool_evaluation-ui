import React from "react";
import Home from "./Home/Home";
import About from "./About";
import { Switch, Route, withRouter } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default withRouter(Router);
