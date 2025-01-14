import { env } from "@utils/env";
import axios from "axios";

const BASE_API_URL = env.VITE_BASE_API_URL;

export const api = axios.create({
  baseURL: BASE_API_URL,
});
