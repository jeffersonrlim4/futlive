import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
console.log("🚀 ~ BASE_API_URL:", BASE_API_URL);

export const api = axios.create({
  baseURL: BASE_API_URL,
});
