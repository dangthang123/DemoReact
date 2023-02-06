import React, { useEffect } from 'react';
import '../css/Banner.css';
// import BannerLeft from './Banner/BannerLeft';
// import BannerRight from './Banner/BannerRight';
import PostAPI from './Data/PostAPI';
import imgNoImage from '../img/noimage.jpg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listpost } from './Redux/Api/FecthData';
import BannerLeft from './Banner/BannerLeft';
import BannerRight from './Banner/BannerRight';
function Banner(props) {
    const dataB = props.items.post;
    // console.log(dataB);
    const dispatch = useDispatch();
    const bannerlist = useSelector((state) => state.cartlist);
    const { loading } = bannerlist;
    useEffect(() => {
        dispatch(listpost())
    }, [dispatch])
    let bannerLeft = dataB.filter(item => item.name.includes('BannerLeft'));
    let bannerRight = dataB.filter(item => item.name.includes('BannerRight'));
    return (

        <div className='pos_bannerslide'>
            <div className="container">
                <div className='row'>
                    <BannerLeft bannerLeft={bannerLeft} />
                    <BannerRight bannerRight={bannerRight} />
                </div>

            </div>
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