import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.sass";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import App from "./components/App";

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
