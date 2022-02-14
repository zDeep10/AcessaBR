import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jsonbin.io/b/620828cd1b38ee4b33b9079a"
  // baseURL: "http://localhost:4001"
});


export default api;
