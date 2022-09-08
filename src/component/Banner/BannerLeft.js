import React from 'react';
import Base from '../../img/Base.png';
export default function BannerLeft() {
    return (
        <div className="banner-left">
            <a href="#"><img id="img-banner-left" src={Base} alt="" /></a>
            <div className="banner-left-tille">
                <h3 className="banner-left-tille-1">Two High-end Materials</h3>
                <button className="banner-left-tille-btn">Shop Now</button>
                <h2 className="banner-left-tille-1-1">BLYSZAK</h2>
                <h3 className="banner-left-tille-1-2">EYEWEAR</h3>
            </div>
        </div>
    )
}