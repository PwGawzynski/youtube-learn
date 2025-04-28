import type { AxiosRequestConfig } from 'axios';

export class YtDataApiBaseConf {
  protected static readonly API_KEY = process.env.EXPO_PUBLIC_YT_DATA_API_KEY;

  protected static readonly BASE_URL = process.env.EXPO_PUBLIC_YT_DATA_API_URL;

  protected static async mergeWithDefault(config: AxiosRequestConfig) {
    return {
      ...config,
      params: {
        key: this.API_KEY,
        ...config.params,
      },
    };
  }
}
