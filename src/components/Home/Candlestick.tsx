import React, { useEffect, useState } from "react";
import { getPrices } from "../../api/ohlcv";
import { ohlcv } from "../../types/ohlcv";
import "../../assets/css/Component.scss";
import {
  ChartCanvas,
  Chart,
  CandlestickSeries,
  OHLCTooltip,
  CrossHairCursor,
  BarSeries,
  EdgeIndicator,
  XAxis,
  YAxis,
  MouseCoordinateY,
} from "react-financial-charts";
import { scaleTime } from "d3-scale";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

interface chartOhlcv {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface CandlestickProps {
  coin: ohlcv;
  width: number;
  height: number;
}

const coinPrices: chartOhlcv[] = [];

const Candlestick = (props: CandlestickProps) => {
  const [prices, setPrices] = useState(coinPrices);

  useEffect(() => {
    getPrices(props.coin.coin).then((data: ohlcv[]) => {
      const transformedPrices: chartOhlcv[] = data
        .map((singleOhlcv) => ({
          date: new Date(singleOhlcv.closeTime * 1000),
          open: singleOhlcv.open,
          high: singleOhlcv.high,
          low: singleOhlcv.low,
          close: singleOhlcv.close,
          volume: singleOhlcv.volume,
        }))
        .sort((p1, p2) => (p1.date < p2.date ? -1 : 1));
      setPrices(transformedPrices);
    });
  }, [props.coin]);

  const xAccessor = (d: chartOhlcv) => d?.date;
  const start = xAccessor(prices[Math.max(0, prices.length - 49)]);
  const end = xAccessor(prices[prices.length - 1]);
  const xExtents = [start, end];

  const candleChartExtents = (data: ohlcv) => {
    return [data.high, data.low];
  };
  const barChartAccessor = (data: ohlcv) => {
    return data.volume;
  };

  const barChartHeight = props.height / 4;
  const barChartOrigin = (_: any, h: number) => [0, h - barChartHeight];

  const yEdgeIndicator = (data: ohlcv) => {
    return data.close;
  };
  const pricesDisplayFormat = format(".2f");

  const dateTimeFormat = "%B %d, %Y";
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  return (
    <ChartCanvas
      height={props.height}
      ratio={3}
      width={props.width}
      seriesName={`OHLCV prices - ${props.coin}`}
      data={prices}
      xScale={scaleTime()}
      xAccessor={xAccessor}
      xExtents={xExtents}
    >
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={barChartAccessor}
      >
        <YAxis
          axisAt="left"
          orient="left"
          ticks={5}
          tickFormat={format(".2s")}
        />

        <MouseCoordinateY
          at="left"
          orient="left"
          displayFormat={format(".4s")}
        />

        <BarSeries yAccessor={barChartAccessor} />
      </Chart>
      <Chart yExtents={candleChartExtents}>
        <EdgeIndicator itemType="last" yAccessor={yEdgeIndicator} />
        <XAxis showGridLines ticks={12} tickFormat={timeDisplayFormat} />
        <YAxis showGridLines ticks={4} tickFormat={pricesDisplayFormat} />

        <CandlestickSeries />
        <OHLCTooltip origin={[8, 16]} />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default Candlestick;
