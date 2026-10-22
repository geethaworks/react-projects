import axios from "axios"

const responseInterceptors = () => {
  axios.interceptors.response.use(response => response.data);
};

const setHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}
const initializeAxios = () => {
  axios.defaults.baseURL =
    "https://dummyjson.com/";
  setHeaders();
  responseInterceptors();
}
export default initializeAxios;