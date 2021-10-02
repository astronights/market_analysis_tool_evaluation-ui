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
  XAxis,
  YAxis,
  MouseCoordinateY,
  Label,
  ema,
  LineSeries,
  CurrentCoordinate,
  MovingAverageTooltip,
} from "react-financial-charts";
import { scaleTime } from "d3-scale";
import { format } from "d3-format";

interface chartOhlcv {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  ema20?: number;
  ema50?: number;
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
      setPrices(ema50(ema20(transformedPrices)));
    });
  }, [props.coin]);

  const ema20 = ema()
    .id(0)
    .options({ windowSize: 20 })
    .merge((d: chartOhlcv, c: number) => {
      d.ema20 = c;
    })
    .accessor((d: chartOhlcv) => d.ema20);

  const ema50 = ema()
    .id(1)
    .options({ windowSize: 50 })
    .merge((d: chartOhlcv, c: number) => {
      d.ema50 = c;
    })
    .accessor((d: chartOhlcv) => d.ema50);

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
  const pricesDisplayFormat = format(".2f");

  return (
    <ChartCanvas
      disableZoom={true}
      height={props.height}
      ratio={1}
      width={props.width}
      margin={{ bottom: 20, top: 20, left: 50, right: 50 }}
      padding={0}
      seriesName={`OHLCV prices - ${props.coin.coin}`}
      data={prices}
      xScale={scaleTime()}
      xAccessor={xAccessor}
      xExtents={xExtents}
    >
      <Label
        x={props.width / 2.5}
        y={0}
        fontSize={30}
        fontWeight={"1"}
        text={`OHLCV prices - ${props.coin.name}`}
      />
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
      <Chart
        yExtents={[candleChartExtents, ema20.accessor(), ema50.accessor()]}
      >
        <XAxis showGridLines ticks={6} showTicks={true} />
        <YAxis showGridLines ticks={4} tickFormat={pricesDisplayFormat} />
        <MouseCoordinateY
          at="right"
          orient="right"
          displayFormat={format(".4s")}
        />
        <CandlestickSeries />
        <LineSeries yAccessor={ema20.accessor()} strokeStyle={ema20.stroke()} />
        <LineSeries yAccessor={ema50.accessor()} strokeStyle={ema50.stroke()} />
        <CurrentCoordinate
          yAccessor={ema20.accessor()}
          fillStyle={ema20.stroke()}
        />
        <CurrentCoordinate
          yAccessor={ema50.accessor()}
          fillStyle={ema50.stroke()}
        />

        <OHLCTooltip origin={[8, 16]} />
        <MovingAverageTooltip
          onClick={(e) => console.log(e)}
          origin={[8, 32]}
          options={[
            {
              yAccessor: ema20.accessor(),
              type: "EMA",
              stroke: ema20.stroke(),
              windowSize: ema20.options().windowSize,
            },
            {
              yAccessor: ema50.accessor(),
              type: "EMA",
              stroke: ema50.stroke(),
              windowSize: ema50.options().windowSize,
            },
          ]}
        />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};

export default Candlestick;
