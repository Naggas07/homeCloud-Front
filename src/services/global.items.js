import axios from "axios";

const API = process.env.REACT_APP_API || "http://localhost:5000";

console.log(API);

const http = axios.create({
  baseURL: API,
  withCredentials: true,
});

export default http;
