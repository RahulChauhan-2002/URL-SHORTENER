import axiosInstance from "../utils/axiosInstance";
export const createShortUrl = async (longUrl)=>{
    const {data}=await axiosInstance.post("/api/v1/create",longUrl);
    return data.shortUrl;
}