import axios, { AxiosRequestConfig } from 'axios';

import { LogApiCall } from '../decorators/log-api-call-decorator';
import { LogResponse } from '../decorators/log-response-decorator';
import { YtDataApiBaseConf } from './yt-data-api-base-conf';

export class YtDataApi extends YtDataApiBaseConf {
  @(LogApiCall<YtDataApi>)
  @(LogResponse<YtDataApi>)
  static async get<ResType = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ResType> {
    const res = await axios.get(
      `${YtDataApi.BASE_URL}${url}`,
      await this.mergeWithDefault(config),
    );
    return res.data as ResType;
  }

  @(LogApiCall<YtDataApi>)
  @(LogResponse<YtDataApi>)
  static async post<ResType = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ResType> {
    const res = await axios.post(
      `${YtDataApi.BASE_URL}${url}`,
      data,
      await this.mergeWithDefault(config),
    );
    return res.data as ResType;
  }

  @(LogApiCall<YtDataApi>)
  @(LogResponse<YtDataApi>)
  static async put<ResType = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<ResType> {
    const res = await axios.put(
      `${YtDataApi.BASE_URL}${url}`,
      data,
      await this.mergeWithDefault(config),
    );
    return res.data as ResType;
  }

  @(LogApiCall<YtDataApi>)
  @(LogResponse<YtDataApi>)
  static async delete<ResType = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ResType> {
    const res = await axios.delete(
      `${YtDataApi.BASE_URL}${url}`,
      await this.mergeWithDefault(config),
    );
    return res.data as ResType;
  }
}
