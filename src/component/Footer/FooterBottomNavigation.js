import React from 'react';
import { Link } from 'react-router-dom';
export default function FooterBottomNavigation() {
    return (
        <div className="fist-footer-widgets-navigation">
            <div className="navigation-list">
                <div className="navigation-top">
                    <h3 style={{ color: "#f7f7f7" }}>Navigation</h3>
                    <hr />
                </div>
                <div className="navigation-left-right">
                    <div className="navigation-left">
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/AboutUS"><li>About Us</li></Link>
                            <Link to="/Blog"><li>Our Blog</li></Link>
                            <Link to="/Women"><li>Women</li></Link>
                            <Link to="/Men"><li>Men</li></Link>
                            <Link to="/Contact"><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="navigation-right">
                        <ul>
                            <a href="#"><li>FAQs</li></a>
                            <a href="#"><li>Featured Brands</li></a>
                            <a href="#"><li>Gift Vouchers</li></a>
                            <a href="#"><li>Affiliates</li></a>
                            <a href="#"><li>Specials Gift</li></a>
                            <a href="#"><li>Terms & Conditions</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}