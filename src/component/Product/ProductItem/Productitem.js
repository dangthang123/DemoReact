import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
// import Productdetail from './Productdetail';
// import productlist from '../../Data/data';
import ProductNewAPI from '../../Data/ProductNewAPI';
import imgNoImage from '../../../img/noimage.jpg';
import { Rating } from '@mui/material';


function ProductItem({ handleAddtoCart }) {

    const useF = ProductNewAPI();
    const productlist = useF;
    // console.log(productlist);
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;
    const pagesVisited = pageNumber * usersperPage;

    const pageCount = Math.ceil(productlist.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    const displayUsers = productlist.slice(pagesVisited, pagesVisited + usersperPage)
        .map((product) => (
            <div className="product-item" key={product.id} product={product}  >

                {product.image !== null ? (
                    <div className="product-item-img">
                        <Link to={`/${product.name}/${product.id}`}><img src={product.image.sourceUrl} alt="" /></Link>
                        <Link to="/Cart"><button className="product-item-img-btn" onClick={() => handleAddtoCart(product)} >ADD TO CART</button></Link>
                    </div>
                ) : (
                    <img src={imgNoImage} alt="" style={{ width: '262px', height: '323px' }} />
                )}

                <div className="product-item-content">
                    {product.image !== null ? (
                        <div className="product-item-content-tille">
                            <Link to={`/${product.name}/${product.id}`}>{product.name}</Link>
                        </div>
                    ) : (
                        <div className="product-item-content-tille">
                            <p>{product.name}</p>
                        </div>
                    )}

                    {product.featured === true ? (
                        <Rating defaultValue={product.reviews.averageRating} precision={1} readOnly size='small' />

                    ) : (
                        <Rating defaultValue={0} precision={1} readOnly size='small' />

                    )}
                    {/* <div className="product-item-content-icon" >
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href='#'><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>

                    </div> */}

                    {product.onSale === true ? (
                        <div className="product-item-content-price">
                            <p id="text-brick" style={{ textDecoration: 'line-through', color: '#cfcfcf' }}>̶${product.regularPrice}.00</p>
                            <p id="text-Nobrick">${product.salePrice}.00</p>
                        </div>
                    ) : (
                        <div className="product-item-content-price">
                            <p id="text-brick" style={{ fontWeight: 'bold', color: '#8262b5' }}>̶${product.regularPrice}.00</p>
                        </div>
                    )}


                </div>
            </div>
        ))

    return (
        <div className="product-list">
            {displayUsers}
            <ReactPaginate
                previousLabel={'< Prev'}
                nextLabel={'Next >'}
                pageCount={pageCount}
                onPageChange={onPageChange}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>

    );
}

export default ProductItem;
