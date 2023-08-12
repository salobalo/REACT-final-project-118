import axios from "axios";
import { checkTokenValidity } from "./utils";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refreshToken");
  if (!token ||  !refresh_token) return req;
  //davsetot Authoriation header1
  req.headers.Authorization = `Bearer ${token}`;
  // shevamowmot vada aqvs gasuli tu ara
  const isExpired = checkTokenValidity(token);
  // vada ar gasvlia
  if (!isExpired) return req;
  // vada gauvida
  const { data } = await axios.post("http://localhost:3001/users/refresh", {
    refresh_token,
  });
  const { token: newAccessToken } = data;
  localStorage.setItem("token", newAccessToken);
  req.headers.Authorization = `Bearer ${newAccessToken}`;
  return req;

});

