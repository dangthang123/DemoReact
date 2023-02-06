import React from 'react';

function FooterMiddle(props) {
    return (
        <div className='footer_middle'>
            <div className='footer_middle-up'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 links footer_block'>
                            <div className="static_info">
                                <div className="row">
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-truck-fast"></i>
                                            <div className="txt_info">
                                                <h2>Free Shipping</h2>
                                                <p>Online Only. Exclusions Apply</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-money-bill-wave"></i>
                                            <div className="txt_info">
                                                <h2>Best Price Guarantee</h2>
                                                <p>If You Find a Lower Price</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-solid fa-gift"></i>
                                            <div className="txt_info">
                                                <h2>Free Curbside Pickup</h2>
                                                <p>Grab Your Gear and Go</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-info col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                        <div className="box_info">
                                            <i className="fa-regular fa-life-ring"></i>
                                            <div className="txt_info">
                                                <h2>Support 24/7</h2>
                                                <p>Contact us 24 hours a day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FooterMiddle;