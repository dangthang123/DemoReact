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
import moment from 'moment';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listproductdetail } from '../../Redux/Api/FecthData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addtoCartSuccess, addToWish } from '../../Redux/Action/Action';
// function ProductDetalis({ handleAddtoCart, handleAddtoWish }) {
function ProductDetalis(props) {
    // const { id } = useParams();
    // const dt = dataProductNew();
    // let dataProductNewPage = dt;
    // const thisProduct = dataProductNewPage.find((product) => String(product.id) === id) || {};
    // // console.log(thisProduct);


    //

    // const { id } = useParams();
    // // console.log(id);
    // const dispatch = useDispatch();
    // const productdetail = useSelector((state) => state.productlistdetail);
    // // console.log(productList);
    // const { loading, error, product } = productdetail;
    // // console.log(product);
    // useEffect(() => {
    //     dispatch(listproductdetail(id));
    // }, [dispatch, id])
    // let jsonProduct = [];
    // if (product !== null && product.image !== undefined) {

    //     jsonProduct = product.image.sourceUrl;
    // }
    // else {
    //     jsonProduct = imgNoImage;
    // }
    // let jsonreviews = [];
    // if (product !== null && product.reviews !== undefined) {
    //     jsonreviews = product.reviews.nodes;
    // }

    // console.log(props);
    const { id } = useParams();
    const data = props.productdetail.products;
    let dataProductNewPage = data;
    const thisProduct = dataProductNewPage.find((product) => String(product.id) === id) || {};
    // console.log(thisProduct);
    let jsonreviews = [];
    if (thisProduct !== null && thisProduct.reviews !== undefined) {
        jsonreviews = thisProduct.reviews.nodes;
    }
    return (
        <div>
            <div className="product-details-main">
                <div className="product-details container">

                    <div className="product-details-left">
                        <img src={thisProduct.image.sourceUrl} alt="" ></img>

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

                        <div className='icon-details' style={{ marginBottom: '20px', marginLeft: '13px', display: 'flex' }}>
                            Evaluate:
                            {thisProduct.featured === true ? (
                                <div>

                                    <Rating defaultValue={thisProduct.reviews.averageRating} precision={0.5} readOnly size='small' />
                                    (Vote:{thisProduct.reviewCount})
                                </div>

                            ) : (
                                <div>
                                    <Rating defaultValue={0} precision={0.5} readOnly size='small' />
                                </div>
                            )}
                        </div>

                        <Link to="/Cart "><button className="btn-add-to-cart-detalis" onClick={() => props.addtoCartSuccess(thisProduct)}><i className="fa-solid fa-cart-shopping" style={{ marginRight: '10px' }}></i>ADD TO CART</button></Link>
                        <Link to="/Wish"><button className="btn-add-to-wish-detalis" onClick={() => props.addToWish(thisProduct)} ><i className="fa-solid fa-heart" style={{ marginRight: '10px' }}></i>ADD TO WISH</button></Link>
                    </div>

                </div>

                <div className='comment container'>
                    <Tabs>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Reviews</Tab>
                        </TabList>

                        <TabPanel>
                            {thisProduct.shortDescription !== null ? (
                                <p>{thisProduct.shortDescription}</p>
                            ) : (
                                <p>No Description</p>
                            )}
                        </TabPanel>
                        <TabPanel>
                            <h3>{jsonreviews.length} CONMENTS</h3>
                            {jsonreviews.map((item, index) => (
                                <div className="comment-column" key={index}>
                                    <div className="comment-card">
                                        <div className="containers-comment">
                                            <h3 className="comment-title">{item.author.node.name}</h3>
                                            <div className="comment-content">
                                                <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                                {moment(item.date).format("MMMM Do YYYY, h:mm a")}{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TabPanel>
                    </Tabs>

                </div>
                <Footer />
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        productdetail: state.cartlist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addtoCartSuccess: (item) => {
            dispatch(addtoCartSuccess(item))
        },
        addToWish: (item) => {
            dispatch(addToWish(item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetalis); 