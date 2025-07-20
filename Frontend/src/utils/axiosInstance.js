import axios from "axios";
const secret_url=import.meta.env.VITE_SERVER_URL;
const axiosInstance = axios.create({
  baseURL: `${secret_url}`,
  timeout: 10000,
  withCredentials: true
});

export default axiosInstance;
