import instance from "../config/axios.config";
import { AxiosResponse } from "axios";
import { AuthResponse, BaseApiResponse, RequestParams } from "../types";

export default {
  getRequest: async ({ url, params = {} }: RequestParams): Promise<BaseApiResponse> => {
    try {
      const res: AxiosResponse = await instance.get(url, { params });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },

  postRequest: async ({
    url,
    data = {},
    params = {},
  }: RequestParams): Promise<AuthResponse | BaseApiResponse> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.post(url, data, { params, headers });
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  },

  putRequest: async ({
    url,
    data = {},
    params = {},
  }: RequestParams): Promise<BaseApiResponse> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.put(url, data, { params, headers });
      return res.data;
    } catch (e: any) {
      return e?.response?.data;
    }
  },

  deleteRequest: async ({ url, params = {} }: RequestParams): Promise<BaseApiResponse> => {
    try {
      const res: AxiosResponse = await instance.delete(url, { params });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },
};
