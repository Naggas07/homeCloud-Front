import axios from "axios";
import dontenv from "dotenv";

const API_URL = "http://localhost:5000" || process.env.API;
console.log(API_URL);

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default http;
