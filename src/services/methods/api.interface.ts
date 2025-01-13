/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosMethods {
  get: <T>(
    additionalPathOrConfig?: string | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    data?: any,
    additionalPathOrConfig?: string | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    data?: any,
    additionalPathOrConfig?: string | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(
    data?: any,
    additionalPathOrConfig?: string | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    additionalPathOrConfig?: string | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
}

export function axiosConfig(api: AxiosInstance, path: string): AxiosMethods {
  const buildPath = (additionalPath?: string) =>
    additionalPath ? `${path}/${additionalPath}` : path;

  return {
    get: async <T>(
      additionalPathOrConfig?: string | AxiosRequestConfig,
      config?: AxiosRequestConfig
    ) => {
      if (typeof additionalPathOrConfig === "string") {
        return api.get<T>(buildPath(additionalPathOrConfig), config);
      }
      return api.get<T>(path, additionalPathOrConfig);
    },

    post: async <T>(
      data?: any,
      additionalPathOrConfig?: string | AxiosRequestConfig,
      config?: AxiosRequestConfig
    ) => {
      if (typeof additionalPathOrConfig === "string") {
        return api.post<T>(buildPath(additionalPathOrConfig), data, config);
      }
      return api.post<T>(path, data, additionalPathOrConfig);
    },

    put: async <T>(
      data?: any,
      additionalPathOrConfig?: string | AxiosRequestConfig,
      config?: AxiosRequestConfig
    ) => {
      if (typeof additionalPathOrConfig === "string") {
        return api.put<T>(buildPath(additionalPathOrConfig), data, config);
      }
      return api.put<T>(path, data, additionalPathOrConfig);
    },

    patch: async <T>(
      data?: any,
      additionalPathOrConfig?: string | AxiosRequestConfig,
      config?: AxiosRequestConfig
    ) => {
      if (typeof additionalPathOrConfig === "string") {
        return api.patch<T>(buildPath(additionalPathOrConfig), data, config);
      }
      return api.patch<T>(path, data, additionalPathOrConfig);
    },

    delete: async <T>(
      additionalPathOrConfig?: string | AxiosRequestConfig,
      config?: AxiosRequestConfig
    ) => {
      if (typeof additionalPathOrConfig === "string") {
        return api.delete<T>(buildPath(additionalPathOrConfig), config);
      }
      return api.delete<T>(path, additionalPathOrConfig);
    },
  };
}
