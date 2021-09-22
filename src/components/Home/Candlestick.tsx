import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import { getPrices } from "../../api/ohlcv";
import { ohlcv } from "../../types/ohlcv";
import Highcharts from "highcharts";

interface CandlestickProps {
  coin: string;
}

const coinPrices: ohlcv[] = [];

const Candlestick = (props: CandlestickProps) => {
  const [prices, setPrices] = useState(coinPrices);

  useEffect(() => {
    getPrices(props.coin).then((data) => setPrices(data));
  }, [props.coin]);
  Highcharts.theme = {};

  const options = {
    rangeSelector: {
      selected: 1,
    },
    chart: {
      animation: true,
      type: "candlestick",
      //   events: {
      //     load() {
      //       //   let series = this.series[0];
      //       //   let index = -1;
      //       //   setInterval(function () {
      //       //     index++;
      //       //     series.addPoint(prices[index], true, true);
      //       //   }, 1000);
      //     },
      //   },
    },
    time: {
      useUTC: false,
    },
    title: {
      text: `OHLC Data ${props.coin}`,
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: true,
    },
    xAxis: {
      scrollablePlotArea: {
        maxWidth: 1,
      },
      zoomEnabled: true,
      width: "100%",
      range: 10000,
      units: [["hour", [1]]],
    },
    yAxis: {
      title: {
        text: "PRICE",
        margin: -20,
        style: {
          color: "white",
          fontWeight: 800,
          opacity: 0.7,
        },
      },
    },

    series: [
      {
        step: "center",
        name: "test",
        data: prices.map((price) => [
          price.closeTime,
          price.open,
          price.high,
          price.low,
          price.close,
        ]),
        type: "candlestick",
      },
    ],
  };

  Highcharts.setOptions(Highcharts.theme);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default Candlestick;
