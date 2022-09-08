import React from 'react';
import FooterBottomAbout from './FooterBottomAbout';
import FooterBottomLocation from './FooterBottomLocation';
import FooterBottomNavigation from './FooterBottomNavigation';
import FooterCopyright from './FooterCopyright';

export default function FooterBottom() {
    return (
        <div className="container-footer-bottom">
            <div className="footer-bottom-list container">
                <div className="fist-footer-widgets">
                    <FooterBottomAbout />
                    <FooterBottomNavigation />
                    <FooterBottomLocation />

                </div>
            </div>
            <FooterCopyright />
        </div>
    )
}