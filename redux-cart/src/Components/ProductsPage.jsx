import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../features/Products/productSlice';
import Product from './Product';

const ProductsPage = () => {
    const products = useSelector(selectAllProducts);

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsPage;
