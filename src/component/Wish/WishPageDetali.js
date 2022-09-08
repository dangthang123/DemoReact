import React from 'react';
import FooterBottom from '../Footer/FooterBottom';
import '../../css/Wish.css';
import { Link } from 'react-router-dom'

function WishPageDetali({ wishItem, handleRemoveWish, handleAddtoCart }) {
    return (
        <div>
            <div className='wish container'>
                <div className="tille-item">
                    <h3 className="tille-item-2">MY WISHLIST <i className="fa-solid fa-heart" style={{ color: 'red' }}></i></h3>
                    <hr className="tille-hr" />
                </div>

                {wishItem.length === 0 && <div className='no-wish'>No WishList</div>}
                <div className='wish-list'>
                    {wishItem.map((item) => (
                        <div className='wish-item' key={item.id}>
                            <img className='wish-img' src={item.image.sourceUrl} alt=""></img>
                            <div className='wish-name'>{item.name}</div>
                            <div className='wish-price'>Total: ${item.salePrice}.00</div>
                            <button className='btn-remove-wish' onClick={() => handleRemoveWish(item.id)} >Remove</button>
                            <Link to="/Cart"><button className='btn-add-to-cart-wish' onClick={() => handleAddtoCart(item)}>ADD TO CART</button></Link>
                        </div>
                    ))}
                </div>
            </div>
            <FooterBottom />
        </div>
    );
}

export default WishPageDetali;
