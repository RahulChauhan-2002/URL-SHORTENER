import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://url-shortener-nxc8.onrender.com",
  timeout: 10000,
  withCredentials: true
});

export default axiosInstance;
