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
    const { slug } = useParams()
    const fetchProduct = async () => {
        try {
            const response = await productsApi.show(slug)
            setProduct(response)
        } catch (error) {
            setIsError(true)
            console.log("Error occured : ", error)
        }
        finally {
            setIsloading(false)
        }
    }
    console.log(product)
    useEffect(() => {
        fetchProduct()
    }, [])
    const {
        name,
        description,
        mrp,
        offer_price: offerPrice,
        image_urls: imageUrls,
        image_url: imageUrl,
    } = product;
    const totalDiscount = mrp - offerPrice;
    const discountPercentage = ((totalDiscount / mrp) * 100).toFixed(1);
    if (isLoading) {
        <PageLoader />
    }
    if (isError) return <PageNotFound />;

    return (
        <div class='main-container'>
            <Header title={name} />
            <div class='product-details'>
                <div style={{ width: '40%' }}>
                    {imageUrls && imageUrls.length !== 0 ? (
                        <Carousel imageUrls={[...imageUrls, imageUrl]} title={name} />
                    ) : (
                        <img alt={name} src={imageUrl} />
                    )}
                </div>
                <div className="product-info">
                    <p>{description}</p>
                    <p>MRP: ${mrp}</p>
                    <p><strong>Offer price: ${offerPrice}</strong></p>
                    <p style={{ color: 'yellowgreen' }}><strong>{discountPercentage}% off</strong></p>
                </div>
            </div>

        </div>

    )

}
export default Product