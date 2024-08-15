import axios from "axios";
// import * as Utils from "../Utils";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle errors and responses
client.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      status: response.status,
      error: null,
    };
  },
  (error) => {
    return {
      data: null,
      status: error.response.status,
      error: error.response.data,
    };
  }
);

export default client;
