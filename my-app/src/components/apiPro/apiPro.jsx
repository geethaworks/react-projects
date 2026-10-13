import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './apiPro.css'

const ApiPro = () => {
    const [data, setData] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://smile-cart-backend-staging.neetodeployapp.com/products');
            setData(response.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    ///
    useEffect(() => {
        fetchData();
    }, []);
    const handleClick = (item) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.name === item.name);
            if (existing) {
                return prev.map((i) =>
                    i.name === item.name
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const increaseQuantity = (name) => {
        setCart((prev) =>
            prev.map((item) =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
    const decreaseQuantity = (name) => {
    setCart((prev) =>
      prev.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


    return (
    <div className='main-page'>
        <div>
            <h1>Products</h1>
            {data.map((item,i) => (
                <div className='item1' key={`${i}-id`}>
                    <h2>{item.name}</h2>
                    <img src={item.image_url} alt={item.name} style={{ width: '100px', height: '100px' }} />
                    <button onClick={() => handleClick(item)}>Add</button>
                </div>
            ))}
        </div>
        <div>
            <h1>My Cart</h1>
            {cart.map((item, i ) => (
                <div key={`${i}-id`}>
                    <h3>{item.name}</h3>
                    <img src={item.image_url} alt={item.name} width="100" />
                    <button onClick={() => decreaseQuantity(item.name)}> - </button>
                    <span> {item.quantity} </span>
                    <button onClick={() => increaseQuantity(item.name)}> + </button>
                </div>
            ))}

        </div>
    </div>
)
}

export default ApiPro;  