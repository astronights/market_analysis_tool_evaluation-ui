import { request } from "./request";
import { ohlcv } from "../types/ohlcv";
import { AxiosResponse } from "axios";

export const updatePrices = async (
  lastUpdated: number,
  timeNow: number
): Promise<ohlcv[]> => {
  const response: AxiosResponse = await request("POST", "/ohlcv/save", null, {
    before: timeNow.toString(),
    after: lastUpdated.toString(),
  });
  return response.data;
};

export const getCoins = async (): Promise<ohlcv[]> => {
  const response: AxiosResponse = await request(
    "GET",
    "/ohlcv/latest-coins",
    null,
    null
  );
  return response.data;
};

export const getPrices = async (coin: String): Promise<ohlcv[]> => {
  const response: AxiosResponse = await request(
    "GET",
    `/ohlcv/coin/${coin}`,
    null,
    null
  );
  return response.data;
};
