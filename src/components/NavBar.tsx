import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Component.scss";

const NavBar = () => {
  return (
    <AppBar
      className="nav-bar"
      // style={{ backgroundColor: "#e7e7e7" }}
      position="sticky"
    >
      <Toolbar>
        <NavLink className="app-name nav-link" to="/home">
          <span className="full-text">
            CryptoMATE: Market Analysis Technical Evaluation
          </span>
          <span className="short-text">CryptoMATE</span>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active-nav" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active-nav" to="/about">
          About
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
