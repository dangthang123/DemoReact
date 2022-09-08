import React from 'react';
import FooterSlider from './FooterSlider/FooterSlider';
// import FooterSlider from './FooterSlider';
import FooterTopTitle from './FooterTopTitle';

export default function FooterTop() {
    return (
        <div className="container-footer-top">
            <FooterTopTitle />
            {/* <FooterSlider /> */}
            <FooterSlider />
        </div>
    )
}