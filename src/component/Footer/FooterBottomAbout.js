import React from 'react';

export default function FooterBottomAbout() {
    return (
        <div className="fist-footer-widgets-about">
            <div className="about-top">
                <div className="about-top-1">
                    <h3 style={{ color: "#f7f7f7" }}>About Franco</h3>
                    <hr />
                </div>

                <div className="about-top-2">
                    <p>
                        Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean
                        hendrerit, elit a lacinia suscipit, orci mauris vulputate mi, eu
                        interdum nunc diam at ipsum.
                    </p>
                    <div className="about-top-2-icon">
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                        <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}