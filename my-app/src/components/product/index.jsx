import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css'
import Carousel from "./Carousel";
import productsApi from "../../apis/products";
import { Header, PageLoader, PageNotFound } from "../common";

const Product = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false)
    const { id } = useParams()
    const fetchProduct = async () => {
        try {
            const response = await productsApi.show(id,{calculateMrp:true})
            setProduct(response)
        } catch (error) {
            setIsError(true)
            console.log("Error occured : ", error)
        }
        finally {
            setIsloading(false)
        }
    }
    useEffect(() => {
        fetchProduct()
    },[])
    const { title, description, price, discountPercentage, images, thumbnail,mrp } = product;
    if (isLoading) {
        return <PageLoader />
    }
    if (isError) 
        return <PageNotFound />;

    return (
        <div className='main-container'>
            <Header title={title} />
            <div className='product-details'>
                <div style={{ width: '40%' }}>
                    {images && images.length > 1 ? (
                        <Carousel imageUrls={images} title={title} />
                    ) : (
                        <img alt={title} src={thumbnail} />
                    )}
                </div>
                <div className="product-info">
                    <p>{description}</p>
                    <p>MRP: ${mrp}</p>
                    <p><strong>Offer price: ${price}</strong></p>
                    <p style={{ color: 'yellowgreen' }}><strong>{discountPercentage}% off</strong></p>
                </div>
            </div>

        </div>

    )
}
export default Product