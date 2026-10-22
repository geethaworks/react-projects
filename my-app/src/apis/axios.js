import axios from "axios"

const responseInterceptors = () => {
  axios.interceptors.response.use(response => {
    let data = response.data;
    if (response.config.calculateMrp) {
        const mrp= (data.price / (1 - data.discountPercentage / 100)).toFixed(1)
       return {...data,mrp}
    }
    return data;
  });
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