import { Box, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import FooterBottom from '../Footer/FooterBottom';
import '../Page/css/BlogPage.css';
import { listpost } from '../Redux/Api/FecthData';
import BlogPageItem from './BlogPages/BlogPageItem';
function BlogPage(props) {
    const dispatchPost = useDispatch();
    // console.log(post);
    const postList = useSelector((state) => state.cartlist);
    // console.log(productList);
    const { loadingPost } = postList;
    useEffect(() => {
        dispatchPost(listpost());
    }, [dispatchPost])
    return (
        <div className="container-all">
            <div className='about-blog container'>
                {loadingPost === undefined ? (
                    <div className="tille-item">
                        <Box sx={{ width: 300 }}>
                            <Skeleton animation="wave" width="50%" />
                            <Skeleton animation="wave" width="60%" />
                        </Box>
                    </div>
                ) : (
                    <div className="tille-item">
                        <h4 className="tille-item-1">FRANCO</h4>
                        <h3 className="tille-item-2">BLOG ITEMS</h3>
                        <hr className="tille-hr" />
                    </div>
                )}

                <BlogPageItem />
            </div>
            <FooterBottom />
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}
export default connect(mapStateToProps)(BlogPage);