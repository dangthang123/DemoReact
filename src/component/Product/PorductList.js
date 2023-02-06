import React, { useState } from 'react';
// import ProductData from './ProductItem';
import ProductItem from './ProductItem/Productitem';

// import ProductItem from './ProductItem';

export default function ProductList({ data }) {

    return (

        <div className="product-main">
            {/* <ProductItem /> */}
            <ProductItem data={data} />
        </div>

    )
}