import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="img" />
            <h3>${product.price}</h3>
            <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </div>
    );
};

export default Product;
