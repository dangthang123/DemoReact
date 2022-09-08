import React from 'react';
import Base2 from '../../img/Base2.png';
import Base3 from '../../img/Base3.png';
export default function BannerRight() {
    return (
        <div className="banner-right">
            <div className="banner-right-top">
                <a href="#"><img src={Base2} alt="" /></a>
                <div className="banner-right-top-tille">
                    <h3 className="banner-right-top-tille-1">SMALL THING</h3>
                    <h4 className="banner-right-top-tille-2">MAKE DIFFERENT</h4>
                </div>
            </div>
            <div className="banner-right-bottom">
                <a href="#"><img src={Base3} alt="" /></a>
                <div className="banner-right-bottom-tille">
                    <h3 className="banner-right-bottom-tille-1">FOLIO</h3>
                    <h4 className="banner-right-bottom-tille-2">BACKPACK</h4>
                    <button className="banner-right-bottom-btn">Shop Now</button>
                </div>
            </div>
        </div>
    )
}