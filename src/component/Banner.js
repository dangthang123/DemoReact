import React from 'react';
import '../css/Banner.css';
import BannerLeft from './Banner/BannerLeft';
import BannerRight from './Banner/BannerRight';

export default function Banner() {
    return (
        <div className="banner-container container">
            <div className="banner container">
                <BannerLeft />
                <BannerRight />
            </div>
        </div>
    )
}