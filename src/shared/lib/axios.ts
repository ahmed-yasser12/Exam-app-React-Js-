import axios, { type AxiosResponse } from "axios";
import type { IApiRes } from "../types/api";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.response.use((response:AxiosResponse<IApiRes<unknown,unknown >>)=> response , (error)=>{
  const message =error.response?.data.message ?? error.message ?? "something Wrong";
  return  Promise.reject(new Error(message))
})
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});