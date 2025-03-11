import "../assets/css/App.scss";
import { GlobalStateProvider } from "../utils/GlobalStateProvider";
import Layer from "./Layer";

const App = () => {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Layer />
      </GlobalStateProvider>
    </div>
  );
};

export default App;
