import React from 'react';
import FooterBottom from '../Footer/FooterBottom';
import '../Page/css/AboutPage.css';
import AboutPageItem from './AboutPages/AboutPageItem';
export default function AboutPage() {
    return (
        <div className="container-all">
            <div className='about-page container'>
                <div className="page-about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                </div>
                <AboutPageItem />
            </div>
            <FooterBottom />
        </div>
    )
}