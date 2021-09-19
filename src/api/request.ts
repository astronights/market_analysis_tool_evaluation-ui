import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.SERVER_URL,
});

export const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse> => {
  return api.request<T>({ method, url, params });
};
