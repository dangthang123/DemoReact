import React from 'react';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import '../../../css/Cart.css';
import FooterBottom from '../../Footer/FooterBottom';
import { listproduct } from '../../Redux/Api/FecthData';
import { increaseQuantity, decreaseQuantity, deleteItemCart, deleteAllCart, checkoutItem, addtoCartSuccess } from '../../Redux/Action/Action';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// function CartPageDetali({ items, cartItem, handleAddtoCart, handleRemovetoCart, handleCleartoCart, handleRemoveItem }) {

function CartPageDetali({ items, increaseQuantity, decreaseQuantity, deleteItemCart, deleteAllCart, checkoutItem, addtoCartSuccess }) {
    let ListCart = [];

    let TotalCart = 0;
    Object.keys(items.carts).forEach(function (item) {
        // console.log(items.carts[item].saleprice);
        if (items.carts[item].onsale === true) {
            TotalCart += items.carts[item].quantity * items.carts[item].saleprice;
        } else {
            TotalCart += items.carts[item].quantity * items.carts[item].regularprice;
        }

        ListCart.push(items.carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('en-US');
    }


    // console.log(ListCart);

    // const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // Supports ESM

    // const WooCommerce = new WooCommerceRestApi({
    //     url: 'http://localhost/dataWP', // Your store URL
    //     consumerKey: 'ck_d946c2a33b2bd9f8e6d2c6b39fb6f5f1a0be903f', // Your consumer key
    //     consumerSecret: 'cs_fa72a553d0ba6e375b4099799bcb83692cd8a944', // Your consumer secret
    //     version: 'wc/v3' // WooCommerce WP REST API version
    // });

    // const WooCommerce = new WooCommerceRestApi({
    //     url: 'https://72.arrowhitech.net/tn3/reactjs_thang/backend/', // Your store URL
    //     consumerKey: 'ck_fbe7aaa0fddce48d19779e7f69c669d4b617d3e5', // Your consumer key
    //     consumerSecret: 'cs_28efc0dc44ace202e46c2420f8b7e5462ade95cc', // Your consumer secret
    //     version: 'wc/v3' // WooCommerce WP REST API version
    // });
    // const data = {
    //     payment_method: "bacs",
    //     payment_method_title: "Direct Bank Transfer",
    //     set_paid: true,
    //     billing: {
    //         first_name: "Thang ",
    //         last_name: "Doe",
    //         address_1: "969 Market",
    //         address_2: "",
    //         city: "San Francisco",
    //         state: "CA",
    //         postcode: "94103",
    //         country: "US",
    //         email: "john.doe@example.com",
    //         phone: "(555) 555-5555"
    //     },
    //     shipping: {
    //         first_name: "John",
    //         last_name: "Doe",
    //         address_1: "969 Market",
    //         address_2: "",
    //         city: "San Francisco",
    //         state: "CA",
    //         postcode: "94103",
    //         country: "US"
    //     },
    //     line_items: [
    //         {
    //             product_id: 93,
    //             quantity: 2
    //         },
    //         {
    //             product_id: 22,
    //             variation_id: 23,
    //             quantity: 1
    //         }
    //     ],
    //     shipping_lines: [
    //         {
    //             method_id: "flat_rate",
    //             method_title: "Flat Rate",
    //             total: "10.00"
    //         }
    //     ]
    // };

    // WooCommerce.post("orders", data)
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error.response.data);

    //     });

    return (
        <div>
            <section className="h-100 gradient-custom">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                        <MDBCol md="8">
                            <MDBCard className="mb-4">
                                <MDBCardHeader className="py-3">
                                    <MDBTypography tag="h5" className="mb-0">
                                        Cart -{ListCart.length} item
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    {ListCart.map((item, key) => (
                                        <MDBRow key={key}>
                                            <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                <MDBRipple rippleTag="div" rippleColor="light"
                                                    className="bg-image rounded hover-zoom hover-overlay">
                                                    {item.image === undefined ? (
                                                        <img
                                                            src={item.imagewish}
                                                            className="w-100" alt='' />
                                                    ) : (
                                                        <img
                                                            src={item.image}
                                                            className="w-100" alt='' />
                                                    )}

                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                        </div>
                                                    </a>
                                                </MDBRipple>
                                            </MDBCol>

                                            <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                <p>
                                                    <strong>{item.name}</strong>
                                                </p>
                                                {item.onsale === true ? (

                                                    <p>${item.saleprice}.00 </p>
                                                ) : (
                                                    <p> ${item.regularprice}.00 </p>

                                                )}


                                                <button className='btn-remove-item' onClick={() => deleteItemCart(key)}>
                                                    <MDBIcon fas icon="trash" />
                                                </button>



                                            </MDBCol>
                                            <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                    <MDBBtn className="px-3 me-2" style={{ height: '40px', width: '50px' }} onClick={() => decreaseQuantity(key)}>
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <div className='item-quantity'>
                                                        {item.quantity}
                                                    </div>

                                                    <MDBBtn className="px-3 ms-2" style={{ height: '40px', width: '50px' }} onClick={() => increaseQuantity(key)}>
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </div>

                                                <p className="text-start text-md-center">
                                                    {item.onsale === true ? (
                                                        <strong>Total:${TotalPrice(item.saleprice, item.quantity)}.00 </strong>
                                                    ) : (
                                                        <strong>Total:${TotalPrice(item.regularprice, item.quantity)}.00 </strong>

                                                    )}

                                                </p>
                                            </MDBCol>
                                            <hr className="my-4" />
                                        </MDBRow>
                                    ))}


                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <p>
                                        <strong>Expected shipping delivery</strong>
                                    </p>
                                    <p className="mb-0">12.10.2022 - 14.10.2022</p>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody>
                                    <p>
                                        <strong>We accept</strong>
                                    </p>
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBCard className="mb-4">
                                <MDBCardHeader>
                                    <MDBTypography tag="h5" className="mb-0">
                                        Summary
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBListGroup flush>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>  ${Number(TotalCart).toLocaleString('en-US')}.00</span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>${Number(TotalCart).toLocaleString('en-US')}.00</strong>
                                            </span>
                                        </MDBListGroupItem>
                                    </MDBListGroup>

                                    <Link to='/checkout'><MDBBtn block size="lg">
                                        Go to checkout
                                    </MDBBtn></Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <FooterBottom />
        </div>


    );
}
const mapStateToProps = state => {
    // console.log(state)
    return {
        items: state.cartlist
    }
}
export default connect(mapStateToProps, { increaseQuantity, decreaseQuantity, deleteItemCart, deleteAllCart, addtoCartSuccess })(CartPageDetali);