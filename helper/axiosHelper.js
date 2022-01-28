import axios from "axios";
import secureStorage from "./secureStorage";

export const AXIOS = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${secureStorage.getItem("token")}`,
  },
  timeout: 40000,
});

export const AXIOS_FILE = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${secureStorage.getItem("token")}`,
  },
  timeout: 40000,
});
