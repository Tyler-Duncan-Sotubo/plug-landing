import Axios, { isAxiosError } from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

export { axiosInstance, isAxiosError };
