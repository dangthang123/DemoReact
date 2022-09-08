import React from 'react';
import FooterBottom from '../Footer/FooterBottom';
import '../Page/css/BlogPage.css';
import BlogPageItem from './BlogPages/BlogPageItem';
export default function BlogPage() {
    return (
        <div className="container-all">
            <div className='about-blog container'>
                <div className="tille-item">
                    <h4 className="tille-item-1">FRANCO</h4>
                    <h3 className="tille-item-2">BLOG ITEMS</h3>
                    <hr className="tille-hr" />
                </div>
                <BlogPageItem />
            </div>
            <FooterBottom />
        </div>
    )
}