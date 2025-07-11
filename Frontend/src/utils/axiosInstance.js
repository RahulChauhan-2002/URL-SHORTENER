import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://url-shortener-10u2.onrender.com",
    timeout:10000,
    withCredentials: true
});
export default axiosInstance;