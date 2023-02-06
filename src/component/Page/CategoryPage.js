import { Box, Skeleton } from '@mui/material';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CategoryPageAPI from '../Data/CategoryAPI';
import Footer from '../Footer';
import { listcategoryproduct } from '../Redux/Api/FecthData';
import CategoryPageItem from './CategoryPages/CategoryPageItem';
import FilterProduct from './CategoryPages/FilterProduct';

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
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        )
    }, [])
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
                                <h3 className="tille-item-2"> {thisTitle.name}</h3>
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