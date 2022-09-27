import { Box, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CategoryPageAPI from '../Data/CategoryAPI';
import Footer from '../Footer';
import { listcategoryproduct } from '../Redux/Api/FecthData';
import CategoryPageItem from './CategoryPages/CategoryPageItem';

// import '../../css/Product.css';
function Categorypage(props) {
    const { slug } = useParams();
    const productcategory = props.product.productcategory;
    const dispatch = useDispatch();
    const productCategory = useSelector((state) => state.cartlist);
    const { loading } = productCategory;
    // // console.log(productcategory);
    useEffect(() => {
        dispatch(listcategoryproduct());
    }, [dispatch])
    const thisTitle = productcategory.find((product) => String(product.slug) === slug) || {};
    return (
        <div className="container-all">
            <section>
                <div className="section-main container">
                    <div className="tille-container">
                        {loading === undefined ? (
                            <div className="tille-item">
                                <Box sx={{ width: 300 }}>
                                    <Skeleton animation="wave" width="50%" />
                                    <Skeleton animation="wave" width="60%" />
                                </Box>
                            </div>
                        ) : (
                            <div className="tille-item">
                                <h4 className="tille-item-1">FRANCO</h4>
                                <h3 className="tille-item-2">LIST {thisTitle.name} ITEMS</h3>
                                <hr className="tille-hr" />
                            </div>
                        )}

                    </div>
                    <CategoryPageItem />
                </div>
            </section>
            <Footer />
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        product: state.cartlist
    }
}

export default connect(mapStateToProps)(Categorypage);