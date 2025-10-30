import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ap-news-b.onrender.com/api", // Your backend server URL
});

export default apiClient;
