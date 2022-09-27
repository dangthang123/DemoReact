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

    const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
    // Supports ESM

    // const WooCommerce = new WooCommerceRestApi({
    //     url: 'http://localhost/dataWP', // Your store URL
    //     consumerKey: 'ck_d946c2a33b2bd9f8e6d2c6b39fb6f5f1a0be903f', // Your consumer key
    //     consumerSecret: 'cs_fa72a553d0ba6e375b4099799bcb83692cd8a944', // Your consumer secret
    //     version: 'wc/v3' // WooCommerce WP REST API version
    // });

    const WooCommerce = new WooCommerceRestApi({
        url: 'https://72.arrowhitech.net/tn3/reactjs_thang/backend/', // Your store URL
        consumerKey: 'ck_fbe7aaa0fddce48d19779e7f69c669d4b617d3e5', // Your consumer key
        consumerSecret: 'cs_28efc0dc44ace202e46c2420f8b7e5462ade95cc', // Your consumer secret
        version: 'wc/v3' // WooCommerce WP REST API version
    });
    const data = {
        payment_method: "bacs",
        payment_method_title: "Direct Bank Transfer",
        set_paid: true,
        billing: {
            first_name: "Thang ",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        line_items: [
            {
                product_id: 93,
                quantity: 2
            },
            {
                product_id: 22,
                variation_id: 23,
                quantity: 1
            }
        ],
        shipping_lines: [
            {
                method_id: "flat_rate",
                method_title: "Flat Rate",
                total: "10.00"
            }
        ]
    };

    // WooCommerce.post("orders", data)
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error.response.data);

    //     });

    return (
        <div>

            <div className='cart container'>
                <div className="tille-item">
                    <h3 className="tille-item-2">SHOPPING CART <i className="fa-solid fa-cart-plus" style={{ color: '#f06292' }}></i></h3>
                    <hr className="tille-hr" />
                </div>
                <div className='item-clear-price'>
                    <div className='item-clear'>
                        <button className='btn-clear' onClick={() => deleteAllCart(items)}><i className="fa-solid fa-trash-can"></i>Clear cart</button>
                    </div>
                    <div className='price-total-name'>
                        Total Cart:
                        <div className='price-total-price'>
                            ${Number(TotalCart).toLocaleString('en-US')}.00
                        </div>
                    </div>
                </div>

                {items.numberCart === 0 && <div className='cart-noo'>No Item</div>}

                <div className='cart-list'>
                    {ListCart.map((item, key) => (
                        <div key={key} className='cart-item'>
                            {item.image === undefined ? (
                                <img src={item.imagewish} alt="" className='item-img'></img>
                            ) : (
                                <img src={item.image} alt="" className='item-img'></img>
                            )}

                            <div className='item-name'>{item.name}</div>
                            {item.onsale === true ? (
                                <div className='item-price'>${item.saleprice}.00</div>
                            ) : (
                                <div className='item-price'> ${item.regularprice}.00</div>
                            )}

                            <div className='item-function'>
                                <button className='btn-remove' onClick={() => decreaseQuantity(key)}>-</button>
                                <div className='item-quantity'>
                                    {item.quantity}
                                </div>
                                <button className='btn-add' onClick={() => increaseQuantity(key)}>+</button>
                            </div>
                            {item.onsale === true ? (
                                <div className='item-total-price'> ${TotalPrice(item.saleprice, item.quantity)} </div>
                            ) : (
                                <div className='item-total-price'>${TotalPrice(item.regularprice, item.quantity)} </div>
                            )}

                            <button className='btn-remove-item' onClick={() => deleteItemCart(key)}>Remove</button>
                            {/* <button className='btn-checkout-item' onClick={() => checkoutItem(item)}>Checkout</button>
                            <Checkbox {...label} onClick={() => checkoutItem(item)} />
                            <Button variant="contained" onClick={() => addtoCartSuccess(item)} >CHECK OUT</Button> */}
                        </div>
                    ))}
                </div>
                <Button variant="contained">CHECK OUT</Button>
                <Checkout />
            </div>



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