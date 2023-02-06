import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
// import Productdetail from './Productdetail';
// import productlist from '../../Data/data';
import ProductNewAPI from '../../Data/ProductNewAPI';
import imgNoImage from '../../../img/noimage.jpg';
import { Rating } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listproduct } from '../../Redux/Api/FecthData';
import imagesale from '../../../img/zyro-image.png'
import ProductSkeleton from '../../Page/Loading/ProductSkeleton';
import { addtoCartSuccess, fetchDataSuccess } from '../../Redux/Action/Action';
import { cartReducer } from '../../Redux/Reducer/Reducer';
// function ProductItem({handleAddtoCart}) {
function ProductItem(props) {

    // const dispatch = useDispatch();
    const productList = useSelector((state) => state.cartlist);
    const { loading } = productList;
    let dataProduct = [];
    if (props.data !== undefined) {
        dataProduct = props.data
    }
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;
    const pagesVisited = pageNumber * usersperPage;

    const pageCount = Math.ceil(dataProduct.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    const displayUsers = dataProduct.slice(pagesVisited, pagesVisited + usersperPage)
        .map((product) => (
            <div className="product-item col-xl-3" key={product.id} product={product}  >

                {product.image !== null ? (
                    product.onSale === true ? (
                        <div className="product-item-img">
                            <Link to={`/${product.name}/${product.id}`}><img src={product.image.sourceUrl} alt="" className='item-img' />
                                <img className='logosale' src={imagesale} alt=''></img>
                            </Link>
                            {/* <Link to="/Cart"><button className="product-item-img-btn" onClick={() => handleAddtoCart(product)} >ADD TO CART</button></Link> */}
                            <Link to="/Cart"><button className="product-item-img-btn" onClick={() => props.addtoCartSuccess(product)} >ADD TO CART</button></Link>
                        </div>
                    ) : (
                        <div className="product-item-img">
                            <Link to={`/${product.name}/${product.id}`}><img src={product.image.sourceUrl} alt="" className='item-img' />
                            </Link>
                            {/* <Link to="/Cart"><button className="product-item-img-btn" onClick={() => handleAddtoCart(product)} >ADD TO CART</button></Link> */}
                            <Link to="/Cart"><button className="product-item-img-btn" onClick={() => props.addtoCartSuccess(product)} >ADD TO CART</button></Link>
                        </div>
                    )

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
                        <Rating defaultValue={product.reviews.averageRating} precision={0.5} readOnly size='small' >{product.reviews.averageRating}</Rating>

                    ) : (
                        <Rating defaultValue={0} precision={0.5} readOnly size='small' />

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

        loading === undefined ? (<ProductSkeleton />) : (
            <div className='row'>
                <div className="product-list col-md-12">
                    {displayUsers}
                    {
                        dataProduct.length > usersperPage ? (
                            <ReactPaginate
                                previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                                nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                containerClassName={'paginationBttns'}
                                previousLinkClassName={'previousBttn'}
                                nextLinkClassName={'nextBttn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationActive'}
                            />
                        ) : (
                            null
                        )
                    }


                </div>
            </div>

        )


    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        product: state.cartlist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addtoCartSuccess: (item) => {
            dispatch(addtoCartSuccess(item))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
