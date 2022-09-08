import React from 'react';
import '../../../css/Cart.css';
import FooterBottom from '../../Footer/FooterBottom';

function CartPageDetali({ cartItem, handleAddtoCart, handleRemovetoCart, handleCleartoCart, handleRemoveItem }) {

    const totalPrice = cartItem.reduce((salePrice, item) => salePrice + item.quantity * item.salePrice, 0);
    return (
        <div>
            <div className='cart container'>
                <div className="tille-item">
                    <h3 className="tille-item-2">SHOPPING CART <i className="fa-solid fa-cart-plus" style={{ color: '#f06292' }}></i></h3>
                    <hr className="tille-hr" />
                </div>
                <div className='item-clear-price'>
                    <div className='item-clear'>
                        {cartItem.length >= 1 && <button className='btn-clear' onClick={handleCleartoCart}><i className="fa-solid fa-trash-can"></i>Clear cart</button>}
                    </div>
                    <div className='price-total-name'>
                        Total Price:
                        <div className='price-total-price'>
                            ${totalPrice}.00
                        </div>
                    </div>
                </div>
                {cartItem.length === 0 && <div className='cart-noo'>No Item</div>}

                <div className='cart-list'>
                    {cartItem.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <img src={item.image.sourceUrl} alt="" className='item-img'></img>
                            <div className='item-name'>{item.name}</div>
                            <div className='item-price'>Total: ${item.salePrice}.00</div>
                            <div className='item-function'>
                                <button className='btn-remove' onClick={() => handleRemovetoCart(item)}>-</button>
                                <div className='item-quantity'>
                                    {item.quantity}
                                </div>
                                <button className='btn-add' onClick={() => handleAddtoCart(item)}>+</button>
                            </div>
                            <button className='btn-remove-item' onClick={() => handleRemoveItem(item.id)}>Remove</button>

                        </div>
                    ))}
                </div>

            </div>
            <FooterBottom />
        </div>


    );
}

export default CartPageDetali;