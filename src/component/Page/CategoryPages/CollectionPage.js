import { Box, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import CategoryPageAPI from '../../Data/CategoryAPI';
import Footer from '../../Footer';
import { listcategoryproduct } from '../../Redux/Api/FecthData';
import ProductSkeleton from '../Loading/ProductSkeleton';


function CollectionPage(props) {

    const dispatch = useDispatch();
    const productCategory = useSelector((state) => state.cartlist);
    const productcategory = props.items.productcategory;
    const { loading } = productCategory;
    // console.log(productcategory);
    useEffect(() => {
        dispatch(listcategoryproduct());
    }, [dispatch])
    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 8;         //number of items in a page
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(productcategory.length / usersperPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const displayUsers = productcategory.slice(pagesVisited, pagesVisited + usersperPage)
        .map((pro) => (
            <div className="product-item" key={pro.id}>
                <div className="product-item-img">
                    <img src={pro.image.sourceUrl} alt='' className='cate-img'></img>
                </div>
                <div className="product-item-content">
                    <div className="product-item-content-tille">
                        <p>{pro.name}</p>
                    </div>
                    <Link to={`/${pro.slug}`}><p className='onClick'><i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '0px', marginTop: '10px', paddingRight: '5px' }}></i>Xem chi tiết !</p></Link>
                </div>
            </div>
        ))
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
                                <h3 className="tille-item-2">DANH MỤC SẢN PHẨM</h3>
                                <hr className="tille-hr" />
                            </div>
                        )}

                    </div>
                    {loading === undefined ? (
                        <ProductSkeleton />
                    ) : (
                        <div className="product-list container">
                            {displayUsers}
                            {
                                productcategory.length > usersperPage ? (
                                    <ReactPaginate
                                        previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                                        nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                                        pageCount={pageCount}
                                        onPageChange={onPageChange}
                                        containerClassName={'paginationBttns'}
                                        previousLinkClassName={'previousBttn'}
                                        nextLinkClassName={'nextBttn'}
                                        disabledClassName={'paginationDisabled'}
                                        activeClassName={'paginationActive'}
                                    />
                                ) : (
                                    null
                                )
                            }

                        </div>
                    )}

                </div>
            </section>
            <Footer />
        </div>


    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        items: state.cartlist,
    }
}

export default connect(mapStateToProps)(CollectionPage);