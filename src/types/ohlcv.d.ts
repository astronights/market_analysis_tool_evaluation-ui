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
  name?: string;
};
