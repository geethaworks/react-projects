import { useState, useEffect } from "react";
import productsApi from "../../apis/products";
import { Header, PageLoader } from "../common";
import ProductListItem from "./productListItem";
import './index.css'

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const  { products } = await productsApi.fetch();
      setProducts(products);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header shouldShowBackButton={false} title="Smile Cart" />
      <div className='product-list'>
        {products?.map(product => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;