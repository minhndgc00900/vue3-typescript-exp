import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig = {}) => {
    // Do something before request is sent
    return config;
  },
  (error: any) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    throw error;
  }
);

export default apiClient;
