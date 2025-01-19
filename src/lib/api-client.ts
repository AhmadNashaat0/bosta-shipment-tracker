import Axios, { InternalAxiosRequestConfig } from "axios";
import { env } from "@/config/env";

export const api = Axios.create({
  baseURL: env.API_URL,
});

// Request Interceptor
function requestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
    config.headers["x-requested-by"] = "Bosta";
  }
  return config;
}
api.interceptors.request.use(requestInterceptor);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error({
      errorMessage: message,
    });

    return Promise.reject(error);
  }
);
