export type coin = {
  symbol: string;
  name: string;
  close: number;
};

export type ohlcv = {
  _id: string;
  coin: string;
  openTime: number;
  closeTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  quoteVolume: number;
};
