/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosMethods {
  get: <T>(config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  post: <T>(
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}

export function axiosConfig(api: AxiosInstance, path: string): AxiosMethods {
  return {
    get: async <T>(config?: AxiosRequestConfig) => api.get<T>(path, config),
    post: async <T>(data?: any, config?: AxiosRequestConfig) =>
      api.post<T>(path, data, config),
    put: async <T>(data?: any, config?: AxiosRequestConfig) =>
      api.put<T>(path, data, config),
    patch: async <T>(data?: any, config?: AxiosRequestConfig) =>
      api.patch<T>(path, data, config),
    delete: async <T>(config?: AxiosRequestConfig) =>
      api.delete<T>(path, config),
  };
}
