import axiosInstance from "../utils/axiosInstance";
export const loginUser = async (email, password) => {
  const { data } = await axiosInstance.post("/api/v1/login", {
    email,
    password,
  });
  return data;
};

export const registerUser = async (name, email, password) => {
  const { data } = await axiosInstance.post("/api/v1/register", {
    name,
    email,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  const { data } = await axiosInstance.get("/api/v1/login");
  return data;
};
