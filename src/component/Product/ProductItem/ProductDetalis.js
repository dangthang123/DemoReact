import { Stack } from '@mui/material';
import Rating from "@mui/material/Rating";
import moment from 'moment/moment';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import imgNoImage from '../../../img/noimage.jpg';
import { addtoCartSuccess, addToWish } from '../../Redux/Action/Action';
import Footer from '../../Footer';
function ProductDetalis(props) {
    // console.log(props);
    const { id } = useParams();
    const data = props.productdetail.products;
    // console.log(data);
    let dataProductNewPage = data;
    const thisProduct = dataProductNewPage.find((product) => String(product.id) === id) || {};
    // console.log(thisProduct);
    let jsonreviews = [];
    if (thisProduct !== null && thisProduct.reviews !== undefined) {
        jsonreviews = thisProduct.reviews.nodes;
    }
    // console.log(jsonreviews);
    let jsoncategory = [];
    if (thisProduct !== null && thisProduct.productCategories !== undefined) {
        jsoncategory = thisProduct.productCategories.nodes;
    }
    // console.log(jsoncategory);
    // +++Customm ++
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-right slider_iconproductdetail_next" />
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-left slider_iconoroductdetail_prev"></i>
            </div>
        );
    };

    var settings = {
        infinite: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // responsive: [
        //     {
        //         breakpoint: 1150,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 1250,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 950,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 580,
        //         settings: {
        //             arrows: false,
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 496,
        //         settings: {
        //             arrows: false,
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 425,
        //         settings: {
        //             arrows: false,
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 375,
        //         settings: {
        //             arrows: false,
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        // ]
    }

    const [tabIndex, setTabIndex] = useState(0);

    return (

        <div className='productdetail-main '>
            <div className='productdetail-container container '>
                <div className='productdetail-content container'>
                    <div className='productdetail-content-left'>

                        <div className='content-left-img'>
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                                {thisProduct.galleryImages !== undefined ? (
                                    thisProduct.galleryImages.nodes.map((ite, index) => (
                                        <img src={ite.sourceUrl} alt='' className='productdetail-img' key={index}></img>))
                                ) : (

                                    <img src={imgNoImage} alt='' className='productdetail-img'></img>
                                )}


                            </Slider>
                        </div>
                        <div className='content-left-slider'>
                            <Slider {...settings}
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                {thisProduct.galleryImages !== undefined ? (
                                    thisProduct.galleryImages.nodes.map((ite, index) => (
                                        <img src={ite.sourceUrl} alt='' className='productdetail-img-slider' key={index}></img>
                                    ))
                                ) : (
                                    <img src={imgNoImage} alt='' className='productdetail-img-slider' ></img>

                                )}

                            </Slider>

                        </div>
                    </div>

                    <div className='productdetail-content-right'>
                        <h2 className='content-right-name'>{thisProduct.name}</h2>
                        <ul className='content-right-instock'>
                            <li>IN STOCK</li>
                            <li>SKU:{thisProduct.sku} </li>
                            <li>BARCODE: 8809685629085</li>
                        </ul>
                        {thisProduct.salePrice !== null ? (
                            <div className='content-right-price'>
                                <div className='content-right-price-regularprice'>SGD {thisProduct.regularPrice}.00$</div>
                                <div className='content-right-price-saleprice'>SGD {thisProduct.salePrice}.00$</div>
                            </div>
                        ) : (
                            <div className='content-right-price'>
                                <div className='content-right-price-regularprice'>SGD {thisProduct.regularPrice}.00$</div>
                            </div>
                        )}
                        {thisProduct.featured === true ? (
                            <div className='content-right-rating'>

                                <Stack spacing={1} className='content-right-rating-star'>
                                    <Rating name="half-rating-read" defaultValue={thisProduct.reviews.averageRating} precision={1} readOnly />
                                </Stack>
                                <div className='content-right-rating-review'>
                                    {thisProduct.reviewCount} reviews
                                </div>
                            </div>
                        ) : (
                            <div className='content-right-rating'>

                                <Stack spacing={1} className='content-right-rating-star'>
                                    <Rating name="half-rating-read" defaultValue={0} precision={1} readOnly />
                                </Stack>
                                <div className='content-right-rating-review'>
                                    0 reviews
                                </div>
                            </div>
                        )}

                        <div className='content-right-features '>
                            <h2>FEATURES:</h2>
                            <ul className='content-right-features-title'>
                                <li dangerouslySetInnerHTML={{ __html: thisProduct.description }}></li>

                            </ul>
                        </div>
                        <div className='content-right-quantity-color'>
                            {/* <div className='content-right-quantity'>
                                Quantity:
                                <div className='content-right-quantity-btn'>
                                    <button className='btn-increase'>-</button>
                                    <div className='productdetail-number'>1</div>
                                    <button className='btn-reduce'>+</button>
                                </div>

                            </div> */}
                            <div className='content-right-color'>
                                <h2>Category:</h2>
                                <div className='content-right-color-btn'>
                                    {jsoncategory.map((item, ind) => (
                                        <p key={ind}><Link to={`/${item.slug}`}>{item.name}</Link></p>
                                    ))}

                                </div>

                            </div>
                        </div>
                        <div className='productdetail-btn-add-to-cart'>
                            <Link to="/Cart ">
                                <button className='btn_addtocart'>
                                    <div className='in_button' onClick={() => props.addtoCartSuccess(thisProduct)}>
                                        <p>ADD TO CART</p>
                                        <i className="far fa-arrow-alt-circle-right arrow_button"></i>
                                    </div>
                                </button>
                            </Link>
                            <div className='share-content'>
                                <h3>Share this to:</h3>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-pinterest"></i>
                            </div>
                        </div>
                        <Link to="/Wish">
                            <button className='btn_addtocart' onClick={() => props.addToWish(thisProduct)}>
                                <div className='in_button'>
                                    <p>ADD TO WISH</p>
                                    <i className="fa-solid fa-heart arrow_button"></i>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='productdetail-description '>
                    <div className='productdetail-description-list max-productdetail'>

                        <div className='productdetail-description-item'>
                            <Tabs
                                selectedIndex={tabIndex}
                                onSelect={(tabIndex) => setTabIndex(tabIndex)}>
                                <TabList>
                                    <Tab><i className="fa-solid fa-angle-right"></i>FEATURES</Tab>
                                    <Tab><i className="fa-solid fa-angle-right"></i>DESCRIPTION</Tab>
                                    {thisProduct.reviewCount !== null ? (
                                        <Tab><i className="fa-solid fa-angle-right"></i>REVIEW ({thisProduct.reviewCount})</Tab>
                                    ) : (
                                        <Tab><i className="fa-solid fa-angle-right"></i>REVIEW(0)</Tab>
                                    )}


                                </TabList>
                                <br />
                                <TabPanel>
                                    <ul className='features description-content-compatibility'>
                                        <li dangerouslySetInnerHTML={{ __html: thisProduct.description }}></li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <div className='productdetail-description-content'>
                                        <p className='description-content-title' dangerouslySetInnerHTML={{ __html: thisProduct.shortDescription }}></p>

                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    {jsonreviews.map((item, index) => (
                                        <div className='productdetail-review' key={index}>
                                            <h2 className='review-name'>{item.author.node.name}</h2>
                                            <Stack spacing={1} className='content-right-rating-star'>
                                                <Rating name="half-rating-read" defaultValue={3} precision={1} readOnly />
                                            </Stack>
                                            <p className='review-content' dangerouslySetInnerHTML={{ __html: item.content }} ></p>
                                            <div className='review-namepost-date'>
                                                <p>Posted by {item.author.node.name}</p>
                                                <p>{moment(item.date).format("MMMM Do YYYY, h:mm a")}{" "}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <button className='btn_review'>
                                        <div className='in_button'>
                                            <p>WRITE A REVIEW</p>
                                            <i className="far fa-arrow-alt-circle-right arrow_button"></i>
                                        </div>
                                    </button>
                                </TabPanel>
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
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