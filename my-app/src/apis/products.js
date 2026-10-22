import axios from "axios"

const show = id => axios.get(`products/${id}`);
const fetch = () => axios.get("products");
const productsApi = { show, fetch };
export default productsApi

// import { mockProductData, mockProductsList } from "./mockProducts"; // Adjust path if needed

// const show = slug => {
//     console.log(`[Mock API] Fetching product with slug: ${slug}`);
//     return Promise.resolve(mockProductData);
// };

// const fetch = () => {
//     console.log("[Mock API] Fetching all products");
//     return Promise.resolve({ products: mockProductsList });
// };

// const productsApi = { show, fetch };
// export default productsApi;