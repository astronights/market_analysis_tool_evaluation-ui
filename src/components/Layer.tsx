import React from "react";
import NavBar from "./NavBar";
import Router from "./Router";

class Layer extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default Layer;
