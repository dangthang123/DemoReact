import React from 'react';
import '../css/Product.css';
import ProductList from './Product/PorductList';

export default function Product({ data }) {
    return (
        <div className="product-container">
            <ProductList data={data} />

        </div>
    )
}