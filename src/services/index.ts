import axios from "axios";

const BASE_API_URL = process.env.BASE_API_URL;

export const api = axios.create({
  baseURL: BASE_API_URL,
});
