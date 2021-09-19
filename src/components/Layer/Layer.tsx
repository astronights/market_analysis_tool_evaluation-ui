import React from "react";
import Page from "../Page/Page";
import NavBar from "../NavBar/NavBar";
import Router from "../Router";

class Layer extends React.Component {
  render() {
    return (
      <Page>
        <NavBar />
        <Router />
      </Page>
    );
  }
}

export default Layer;
