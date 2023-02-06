import { Markup } from 'interweave';
import React from 'react';
import { Link } from 'react-router-dom';
// import { bannerRightdataHome } from '../../../assets/fakedata/HomeData';

function BannerRight({ bannerRight }) {
    // console.log(bannerRight)
    return (
        <div className='col col-md-4 col-xs-12'>

            {bannerRight[0] &&
                bannerRight[0].posts.nodes.map((item, index) => (
                    <div className='banner-box' key={index}>
                        <img src={item.featuredImage.node.sourceUrl} alt='banner' />
                        <div className='text-banner'>
                            <p>{item.title}</p>
                            <Markup content={item.content} />
                            <Link to='/shop-list'>Shop Now <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default BannerRight;