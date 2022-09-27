import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Checkout({ items }) {
    // console.log(items);
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
    return (
        <div>
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
                            <div className='item-quantity'>
                                {item.quantity}
                            </div>
                        </div>
                        {item.onsale === true ? (
                            <div className='item-total-price'> ${TotalPrice(item.saleprice, item.quantity)} </div>
                        ) : (
                            <div className='item-total-price'>${TotalPrice(item.regularprice, item.quantity)} </div>
                        )}
                    </div>
                ))}
                <div className='price-total-name'>
                    {/* Total Cart: */}
                    <div className='price-total-price'>
                        {/* ${Number(TotalCheckout).toLocaleString('en-US')}.00 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        items: state.cartlist
    }
}
export default connect(mapStateToProps)(Checkout);