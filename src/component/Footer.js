import React from 'react';
import '../css/Footer.css';
import FooterBottom from './Footer/FooterBottom';
import FooterMiddle from './Footer/FooterMiddle';
import FooterTop from './Footer/FooterTop';
export default function Footer() {
    return (
        <div className="container-footer">
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </div>
    )
}