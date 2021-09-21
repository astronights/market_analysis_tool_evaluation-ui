import React from "react";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import CoinTable from "./CoinTable";
import WelcomeCard from "./WelcomeCard";
const ResponsiveReactGridLayout = WidthProvider(ResponsiveGridLayout);

class Home extends React.Component {
  render() {
    const layouts = {
      lg: [
        { i: "welcome", x: 0, y: 0, w: 4, h: 2 },
        { i: "coins", x: 4, y: 0, w: 3, h: 2 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
      ],
      md: [
        { i: "welcome", x: 0, y: 0, w: 2, h: 1 },
        { i: "coins", x: 2, y: 0, w: 2, h: 2 },
        { i: "c", x: 10, y: 5, w: 1, h: 2 },
      ],
    };
    return (
      <ResponsiveReactGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="welcome">
          <WelcomeCard />
        </div>
        <div key="coins">
          <CoinTable />
        </div>
        <div key="c">c</div>
      </ResponsiveReactGridLayout>
    );
  }
}

export default Home;
