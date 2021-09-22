import { request } from "./request";
import { ohlcv } from "../types/ohlcv";
import { AxiosResponse } from "axios";

export const getCoins = async (): Promise<ohlcv[]> => {
  const response: AxiosResponse = await request(
    "GET",
    "/ohlcv/latest-coins",
    null
  );
  return response.data;
};

export const getPrices = async (coin: String): Promise<ohlcv[]> => {
  const response: AxiosResponse = await request(
    "GET",
    `/ohlcv/coin/${coin}`,
    null
  );
  return response.data;
};
