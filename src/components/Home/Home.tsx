import React, { useEffect, useRef, useState } from "react";
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

const curCoin: ohlcv = {
  _id: "id",
  coin: "btc",
  name: "Bitcoin",
  openTime: 0,
  closeTime: 0,
  open: 0,
  high: 0,
  low: 0,
  close: 0,
  volume: 0,
  quoteVolume: 0,
};

const Home = () => {
  const [coins, setCoins] = useState(latestCoins);
  const [coin, setCoin] = useState(curCoin);

  const canvasRef = useRef<HTMLDivElement>(null);

  console.log(
    canvasRef,
    "clientWidth",
    canvasRef.current?.clientWidth,
    "offsetWidth",
    canvasRef.current?.offsetWidth
  );

  useEffect(() => {
    getCoins().then((data) => setCoins(data));
  }, []);

  const getLastUpdated = (data: ohlcv[]): number => {
    return data.reduce((c1, c2) => (c1.closeTime > c2.closeTime ? c1 : c2))
      .closeTime;
  };
  return (
    <ResponsiveReactGridLayout
      onResize={(e) => console.log("resized", e)}
      onLayoutChange={(c, a) => console.log("layout", "current", c, "all", a)}
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
        <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
          {canvasRef.current ? (
            <Candlestick
              coin={coin}
              width={canvasRef.current.clientWidth}
              height={canvasRef.current.offsetHeight}
            />
          ) : null}
        </div>
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default Home;
