import { request } from "./request";
import { coin, ohlcv } from "../types/ohlcv";

export const getCoins = () => {
  request("GET", "/ohlcv", null).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
