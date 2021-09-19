import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    );
  }
}

export default NavBar;
