import api from "./api";
const host = process.env.API_URI;
const API_VERSION = "1.2";

const defaultConfig = {
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
  Authorization: "",
};

const apiClient = {
  get: <TResponse>(
    url: string,
    config?: {
      Authorization: string;
    }
  ) =>
    api.get<TResponse>(host + API_VERSION + "/" + url, {
      ...defaultConfig,
      ...config,
    }),
  post: <TBody, TResponse>(url: string, body: TBody, config = {}) =>
    api.post<TBody, TResponse>(host + API_VERSION + "/" + url, body, {
      ...defaultConfig,
      ...config,
    }),
};

export default apiClient;
