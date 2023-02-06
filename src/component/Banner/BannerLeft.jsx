import React from 'react';
// import { bannerdataHome } from '../../../assets/fakedata/HomeData';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
function BannerLeft({ bannerLeft }) {
    var settings = {
        nav: false,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 6000,
        speed: 2000,
        pauseOnHover: false
    }
    // console.log(bannerLeft);

    return (
        <div className='col col-md-8 col-xs-12'>
            <div className='banner-left-main'>
                {bannerLeft[0] ? (
                    <div className='progress-main'>
                        <div className="progress">
                            <div className="color"></div>
                        </div>
                    </div>
                ) : (
                    null
                )}

                <div className='banner-left-list'>
                    <Slider {...settings}>
                        {bannerLeft[0] &&
                            bannerLeft[0].posts.nodes.map((item, index) => (
                                <div className='banner-item' key={index}>
                                    <div className='banner-image'>
                                        <img src={item.featuredImage.node.sourceUrl}
                                            alt='banner' />
                                    </div>
                                    <div className='banner-content'>
                                        <div className='title'>
                                            <p>{item.title}</p>
                                            <Markup content={item.content} />
                                        </div>
                                        <div className='button'>
                                            <Link to='/shop-list'>Shop Now <i className="fa-solid fa-arrow-right icon"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BannerLeft;