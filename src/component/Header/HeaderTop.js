import React from 'react';
export default function HeaderTop() {
    return (
        <div className="header-top">
            <div className="header-container-top">
                <div className="header-container-top-left">
                    <i className="fa-regular fa-bookmark" id="img1"
                    ><p>Welcome to Franco - an e-Commerce PSD Template!</p></i>
                </div>
                <div className="header-container-top-right">
                    <div className="header-container-top-right-1">
                        <a href="#"><i className="fa-solid fa-gear" id="img2"></i></a>
                        <a href="#" className="Setting">Shop Setting</a>
                    </div>
                    <div className="header-container-top-right-2">
                        <a href="#"><i className="fa-solid fa-lock" id="img3"></i></a>
                        <a href="#" className="Login"> Member Login</a>
                    </div>
                </div>


            </div>
        </div>
    )
}