async function request<TResponse>(
  url: string,
  config: { headers: {}; method: string; body?: string | undefined }
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

const api = {
  get: <TResponse>(
    url: string,
    config?: {
      Authorization: string;
      "Cache-Control": string;
      "Content-Type": string;
    }
  ) => request<TResponse>(url, { method: "GET", headers: { ...config } }),
  post: <TBody, TResponse>(url: string, body: TBody, config?: {}) =>
    request<TResponse>(url, {
      method: "POST",
      body: typeof body === "object" ? JSON.stringify(body) : undefined,
      headers: {
        ...config,
      },
    }),
};

export default api;
