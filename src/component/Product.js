import React from 'react';
import '../css/Product.css';
import ProductList from './Product/PorductList';

export default function Product({ handleAddtoCart }) {
    return (
        <div className="product-container">
            <ProductList handleAddtoCart={handleAddtoCart} />

        </div>
    )
}