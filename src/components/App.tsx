import React from "react";
import "../assets/css/App.scss";
import { GlobalStateProvider } from "../utils/GlobalStateProvider";
import Layer from "./Layer";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Layer />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
