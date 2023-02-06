import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PostAPI from '../../Data/PostAPI';
import moment from 'moment';
import imgNoImage from '../../../img/noimage.jpg';
import { connect, useDispatch, useSelector } from 'react-redux';
import { listpost } from '../../Redux/Api/FecthData';


function FooterSliderItem(props) {
    var settings = {
        nav: false,
        dots: true,
        nextArrow: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        speed: 1000,
        dotClass: '.slick-dots',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },


        ]

    };
    // const useF = PostAPI();
    // // console.log(useF);
    // let footersliderlist = [];


    const dispatchPost = useDispatch();
    const postList = useSelector((state) => state.cartlist);
    const post = props.items.post;
    // console.log(post);
    const { loadingPost } = postList;
    // console.log(post);
    useEffect(() => {
        dispatchPost(listpost());
    }, [dispatchPost])
    let footersliderlist = [];
    post.sort((a, b) => a.id < b.id ? 1 : -1).map(item => (
        footersliderlist = item.posts.nodes
    ))
    return (
        <div className="slide-main container">
            <Slider {...settings}>
                {footersliderlist.map(slider => (
                    <div className="container-footer-top-list container" key={slider.id}
                        onClick={() => window.scrollTo(0, 0)}>
                        <div className="container-footer-top-item container">
                            <div className="footer-top-item-img">
                                {slider.featuredImage !== null ? (
                                    <Link to={`/posts/${slider.title}`}> <img src={slider.featuredImage.node.sourceUrl} alt="" /></Link>
                                ) : (
                                    <img src={imgNoImage} alt="" style={{ width: '360px', height: '200px' }} />
                                )}

                                <button className="footer-top-item-btn"></button>
                                <p className="footer-top-item-tille1">{moment(slider.date).format("MMM ")}</p>
                                <p className="footer-top-item-tille2">{moment(slider.date).format("D ")}</p>
                            </div>
                            <div className="footer-top-item-tille">
                                {slider.featuredImage !== null ? (
                                    <Link className="footer-top-item-tille3" to={`/posts/${slider.title}`}>{slider.title}</Link>
                                ) : (
                                    <p className="footer-top-item-tille3" >{slider.title}</p>
                                )}
                                <p className="footer-top-item-tille4" dangerouslySetInnerHTML={{ __html: slider.content }}></p>
                            </div>
                            <hr />
                            <div className="footer-top-item-comment">
                                <div className="footer-top-item-comment">
                                    <div className="footer-top-item-comment-1">
                                        <a href="#"
                                        ><i className="fa-regular fa-comment" style={{ color: "#c4c4c4" }}></i></a>
                                        <p style={{ color: "#c4c4c4" }} >12</p>
                                    </div>
                                    <div className="footer-top-item-comment-2">
                                        <a href="#"><i className="fa-regular fa-heart"></i></a>
                                        <p style={{ color: "#c4c4c4" }}>6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )).slice(0, 9)}
            </Slider>
        </div>
    );

}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}

export default connect(mapStateToProps)(FooterSliderItem);