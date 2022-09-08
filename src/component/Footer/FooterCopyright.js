import React from 'react';

export default function FooterCopyright() {
    return (
        <div className="copyright">
            <hr style={{ border: " #393939 solid 0.5px ", width: " 100%" }} />
            <div className="copyright-content container">
                <div className="copyright-tille">
                    <p>© Copyright 2015 & Made with</p>
                    <i className="fa-solid fa-heart" style={{ color: "red", width: "30px", height: "20px" }}></i>
                    <a href="#" className="copy-white">ArrowHitech</a>
                </div>
                <div className="copyright-logo">
                    <a href="#"><i className="fa-brands fa-cc-visa"></i></a>
                    <a href="#"><i className="fa-brands fa-cc-paypal"></i></a>
                    <a href="#"><i className="fa-brands fa-cc-mastercard"></i></a>
                    <a href="#"><i className="fa-brands fa-cc-discover"></i></a>
                    <a href="#"><i className="fa-brands fa-cc-amex"></i></a>
                </div>
            </div>
        </div>
    )
}