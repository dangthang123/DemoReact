import React, { useState } from 'react';
// import womenpagelist from '../../Data/DataWomenPage'
import CategoryAPI from '../../Data/CategoryAPI';
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import imgNoImage from '../../../img/noimage.jpg';
import { Rating } from '@mui/material';
function WomenPageItem({ handleAddtoCart }) {
    const { slug } = useParams();
    const useF = CategoryAPI();

    let catgorypagelist = useF;

    const thisProduct = catgorypagelist.find((product) => String(product.slug) === slug) || {};
    // console.log(thisProduct);
    let jsonProduct = [];
    if (thisProduct !== null && thisProduct.products !== undefined) {
        // jsonProduct = JSON.stringify(thisProduct.products.nodes);
        // console.log(jsonProduct);
        jsonProduct = thisProduct.products.nodes;
    }
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;         //number of items in a page
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(jsonProduct.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayUsers = jsonProduct.slice(pagesVisited, pagesVisited + usersperPage)
        .map((categorypage) => (
            <div className="product-item" key={categorypage.id}>
                {categorypage.image !== null ? (
                    <div className="product-item-img">
                        <Link to={`/${categorypage.name}/${categorypage.id}`}><img src={categorypage.image.sourceUrl} alt="" /></Link>

                        <Link to="/Cart"><button className="product-item-img-btn" onClick={() => handleAddtoCart(categorypage)}>ADD TO CART</button></Link>
                    </div>
                ) : (
                    <img src={imgNoImage} alt="" style={{ width: '262px', height: '323px' }} />
                )}

                <div className="product-item-content">
                    {categorypage.image !== null ? (
                        <div className="product-item-content-tille">
                            <Link to={`/${categorypage.name}/${categorypage.id}`}>{categorypage.name}</Link>
                        </div>
                    ) : (
                        <div className="product-item-content-tille">
                            <p>{categorypage.name}</p>
                        </div>
                    )}
                    <div className="product-item-content-icon">
                        {categorypage.featured === true ? (
                            <div>
                                <Rating defaultValue={categorypage.reviews.averageRating} precision={1} readOnly size='small' />
                            </div>

                        ) : (
                            <Rating defaultValue={0} precision={1} readOnly size='small' />

                        )}
                    </div>
                    {/* 
                    <div className="product-item-content-icon">
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                        <a href="#"><i className="fa-regular fa-star"></i></a>
                    </div> */}
                    {categorypage.onSale === true ? (
                        <div className="product-item-content-price">
                            <p id="text-brick" style={{ textDecoration: 'line-through', color: '#cfcfcf' }}>̶${categorypage.regularPrice}.00</p>
                            <p id="text-Nobrick">${categorypage.salePrice}.00</p>
                        </div>
                    ) : (
                        <div className="product-item-content-price">
                            <p id="text-brick" style={{ fontWeight: 'bold', color: '#8262b5' }}>̶${categorypage.regularPrice}.00</p>
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

export default WomenPageItem;