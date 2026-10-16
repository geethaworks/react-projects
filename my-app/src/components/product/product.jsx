import React, { useEffect, useState } from "react";
import './product.css'
import Carousel from "../carousel/Carousel";
import productsApi from "../../apis/products";

const Product = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsloading] = useState(true)
    const fetchProduct = async () => {
        try {
            const response = await productsApi.show()
            setProduct(response)
        } catch (error) {
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
        return (
            <div className="loading-container">
                Loading details....
            </div>
        )
    }

    return (
        <div class='main-container'>
            <div class='header'>
                <h1>{name}</h1>
                <hr style={{ border: '2px solid black' }} />
            </div>
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