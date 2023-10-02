import axios from "axios";

export const spacexApi = axios.create({
  baseURL: process.env.SPACEX_API_URL,
});
