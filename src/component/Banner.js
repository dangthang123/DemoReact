import React, { useEffect } from 'react';
import '../css/Banner.css';
// import BannerLeft from './Banner/BannerLeft';
// import BannerRight from './Banner/BannerRight';
import PostAPI from './Data/PostAPI';
import imgNoImage from '../img/noimage.jpg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listpost } from './Redux/Api/FecthData';
function Banner(props) {
    const dataB = props.items.post;
    // console.log(dataB);
    const dispatch = useDispatch();
    const bannerlist = useSelector((state) => state.cartlist);
    const { loading } = bannerlist;
    useEffect(() => {
        dispatch(listpost())
    }, [dispatch])
    let dataBanner = [];
    dataB.sort((a, b) => a.id
        > b.id
        ? 1 : -1).map((item) => (
            dataBanner = item.posts.nodes
        ))
    return (

        <div className="banner-container container">
            {dataBanner.map(title => (
                <div className="banner-main" key={title.id}>
                    {title.featuredImage !== null ? (
                        <img className="img-banner" src={title.featuredImage.node.sourceUrl} alt="" />
                    ) : (
                        <img className="img-banner" src={imgNoImage} alt="" />
                    )}
                    {title.featuredImage !== null ? (
                        <div className="banner-tille">
                            <h3 className="banner-tille-1">{title.title}</h3>
                            <button className="banner-tille-btn">Shop Now</button>
                            <h2 className='banner-tille-2' dangerouslySetInnerHTML={{ __html: title.content }} />
                        </div>
                    ) : (
                        <h3 className="banner-tille-2">NO TITLE</h3>
                    )}

                </div>

            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}
export default connect(mapStateToProps)(Banner);