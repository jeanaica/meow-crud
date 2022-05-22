import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiError =
  | AxiosResponse
  | (AxiosRequestConfig & { status?: number });
