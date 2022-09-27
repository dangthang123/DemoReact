import React from 'react';
import FooterBottom from '../Footer/FooterBottom';
import '../../css/Wish.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteItemWish, addtoCartSuccess } from '../Redux/Action/Action'

// function WishPageDetali({ wishItem, handleRemoveWish, handleAddtoCart }) {
function WishPageDetali({ items, deleteItemWish, addtoCartSuccess }) {
    // console.log(items);
    let ListWish = [];
    Object.keys(items.wishs).forEach(function (item) {
        ListWish.push(items.wishs[item]);
    });
    return (
        <div>
            <div className='wish container'>
                <div className="tille-item">
                    <h3 className="tille-item-2">MY WISHLIST <i className="fa-solid fa-heart" style={{ color: 'red' }}></i></h3>
                    <hr className="tille-hr" />
                </div>

                {items.numberWish === 0 && <div className='no-wish'>No WishList</div>}
                <div className='wish-list'>
                    {ListWish.map((item, key) => (
                        <div className='wish-item' key={key}>
                            <img className='wish-img' src={item.image} alt=""></img>
                            <div className='wish-name'>{item.name}</div>
                            {item.onsale === true ? (
                                <div className='wish-price'>Total: ${item.saleSrice}.00</div>
                            ) : (
                                <div className='wish-price'>Total: ${item.regularPrice}.00</div>
                            )}

                            <button className='btn-remove-wish' onClick={() => deleteItemWish(key)} >Remove</button>
                            <Link to="/Cart"><button className='btn-add-to-cart-wish' onClick={() => addtoCartSuccess(item)}>ADD TO CART</button></Link>
                        </div>
                    ))}
                </div>
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
export default connect(mapStateToProps, { deleteItemWish, addtoCartSuccess })(WishPageDetali);
