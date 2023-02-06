import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Login from '../Login/Login';
export default function HeaderTop() {
    return (
        <div className="header-top">
            <div className="header-container-top">
                <div className="header-container-top-left">
                    <i className="fa-regular fa-bookmark" id="img1"
                    ><p>Miễn phí vận chuyển với đơn hàng trên $ 25!</p></i>
                </div>
                <div className="header-container-top-right">
                    <div className="header-container-top-right-1">
                        <a href="#"><i className="fa-solid fa-phone" id="img2"></i></a>
                        <a href='tel:+888554168' className="Setting">Gọi cho chúng tôi: +888554168</a>
                    </div>
                    <div className="header-container-top-right-2">

                        <Link to="/login"><i className="fa-solid fa-lock" id="img3"></i></Link>
                        <Link to="/login" className="Login"> Đăng Nhập</Link>


                    </div>
                </div>


            </div>
        </div>
    )
}