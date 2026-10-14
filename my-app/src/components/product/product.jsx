import React from "react";
import './product.css'
import { IMAGE_URLS } from "../carousel/image";
import Carousel from "../carousel/Carousel";

const Product = () => {
    return (
        <div class='main-container'>
            <div class='header'>
                <h1>Infinix INBOOK</h1>
                <hr style={{ border: '2px solid black' }} />
            </div>
            <div class='product-details'>
                <div style={{ width: '40%' }}>
                    <Carousel imageUrls={IMAGE_URLS} title="Infinix Inbook" />
                </div>
                <div class='product-info'>
                    <p>Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.</p>
                    <p>MRP: $395.97</p>
                    <p><strong> Offer price: $374.43</strong></p>
                    <p style={{ color: 'yellowgreen' }}><strong>6% off</strong></p>
                </div>
            </div>

        </div>

    )

}
export default Product