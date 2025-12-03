import axios from "axios";
import { useAuthStore } from "../zustand/useAuthStore";

export const apiRequest =  axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})


// automatically set access token to every request
apiRequest.interceptors.request.use(
  (config) => {
    const token = useAuthStore?.getState()?.access_token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);