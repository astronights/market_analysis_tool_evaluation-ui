import React, { useEffect, useState } from "react";
import {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
} from "react-grid-layout";
import { layouts } from "./layouts";
import CoinTable from "./CoinTable";
import WelcomeCard from "./WelcomeCard";
import { getCoins } from "../../api/ohlcv";
import { ohlcv } from "../../types/ohlcv";
import StatsCard from "./StatsCard";
import Candlestick from "./Candlestick";
const ResponsiveReactGridLayout = WidthProvider(ResponsiveGridLayout);

const latestCoins: ohlcv[] = [];

const curCoin: string = "btc";

const Home = () => {
  const [coins, setCoins] = useState(latestCoins);
  const [coin, setCoin] = useState(curCoin);

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  const getLastUpdated = (data: ohlcv[]): number => {
    return data.reduce((c1, c2) => (c1.closeTime > c2.closeTime ? c1 : c2))
      .closeTime;
  };
  return (
    <ResponsiveReactGridLayout
      className="layout"
      layouts={layouts}
      rowHeight={100}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="welcome">
        <WelcomeCard />
      </div>
      <div key="stats">
        <StatsCard
          coinCount={coins.length}
          lastUpdated={coins.length > 0 ? getLastUpdated(coins) : 0}
        />
      </div>
      <div key="coins" className="home-card">
        <CoinTable coins={coins} updateCoin={setCoin} />
      </div>
      <div key="candlestick" className="home-card">
        <Candlestick coin={coin} />
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default Home;
