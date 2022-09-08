import React from 'react';
import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

// import details from "../../../img/Layer1.png"
import Footer from '../../Footer';
import { useParams } from 'react-router';
// import data from '../../Data/data'
// import QuantityForm from '../../Form-Controls/Form/QuantityForm';
import dataProductNew from '../../Data/ProductNewAPI';
import imgNoImage from '../../../img/noimage.jpg';
function ProductDetalis({ handleAddtoCart, handleAddtoWish }) {
    const { id } = useParams();
    const dt = dataProductNew();
    let dataProductNewPage = dt;
    const thisProduct = dataProductNewPage.find((product) => String(product.id) === id) || {};

    let jsonProduct = [];
    if (thisProduct !== null && thisProduct.image !== undefined) {

        jsonProduct = thisProduct.image.sourceUrl;
    } else {
        jsonProduct = imgNoImage;
    }
    // console.log(thisProduct.featured);
    return (
        <div>
            <div className="product-details-main">
                <div className="product-details container">
                    <div className="product-details-left">
                        <img src={jsonProduct} alt="" ></img>
                    </div>

                    <div className="product-details-right">
                        <div className="product-details-title">
                            <h2>{thisProduct.name}</h2>
                        </div>
                        {thisProduct.onSale === true ? (
                            <div className="product-details-price">
                                <p>${thisProduct.salePrice}.00</p>
                            </div>
                        ) : (
                            <div className="product-details-price">
                                <p>${thisProduct.regularPrice}.00</p>
                            </div>
                        )}


                        <div className="product-details-description">
                            <p> {thisProduct.description}</p>
                        </div>

                        <div className='icon-details' style={{ marginBottom: '20px', marginLeft: '20px', display: 'flex' }}>
                            Evaluate:
                            {thisProduct.featured === true ? (
                                <div>
                                    <Rating defaultValue={thisProduct.reviews.averageRating} precision={1} readOnly size='small' />
                                </div>

                            ) : (

                                <Rating defaultValue={0} precision={1} readOnly size='small' />

                            )}
                        </div>

                        <Link to="/Cart "><button className="btn-add-to-cart-detalis" onClick={() => handleAddtoCart(thisProduct)}><i className="fa-solid fa-cart-shopping" style={{ marginRight: '10px' }}></i>ADD TO CART</button></Link>
                        <Link to="/Wish"><button className="btn-add-to-wish-detalis" onClick={() => handleAddtoWish(thisProduct)} ><i className="fa-solid fa-heart" style={{ marginRight: '10px' }}></i>ADD TO WISH</button></Link>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    );
}

export default ProductDetalis; 