import instance from "../config/axios.config";
import { AxiosResponse } from "axios";
import { RequestParams } from "../types";

export default {
  getRequest: async ({ url, params = {} }: RequestParams): Promise<any> => {
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
  }: RequestParams): Promise<any> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.post(url, data, { params, headers });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },

  patchRequest: async ({
    url,
    data = {},
    params = {},
  }: RequestParams): Promise<any> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.patch(url, data, { params, headers });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },

  putRequest: async ({
    url,
    data = {},
    params = {},
  }: RequestParams): Promise<any> => {
    try {
      const headers = { "Content-Type": "application/json" };
      const res: AxiosResponse = await instance.put(url, data, { params, headers });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },

  deleteRequest: async ({ url, params = {} }: RequestParams): Promise<any> => {
    try {
      const res: AxiosResponse = await instance.delete(url, { params });
      return res.data;
    } catch (e: any) {
      return e;
    }
  },
};
