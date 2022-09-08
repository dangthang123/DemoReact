import React from 'react';

export default function FooterBottomLocation() {
    return (
        <div className="fist-footer-widgets-location">
            <div className="location-list">
                <div className="location-top">
                    <h3 style={{ color: "#f7f7f7" }}>Shop Location</h3>
                    <hr />
                </div>
                <div className="location-bottom">
                    <div className="location-bottom-1">
                        <i className="fa-regular fa-map"></i>
                        <a href="#">500 Hennessy Road Causeway Bay, Hong Kong</a>
                    </div>
                    <div className="location-bottom-2">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+1 23456789">+1 23456789</a>
                    </div>
                    <div className="location-bottom-3">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}